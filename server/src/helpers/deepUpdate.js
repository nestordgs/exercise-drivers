/**
 * Sets and saves a Sequelize instance and all
 * associated nested instances.
 * @param  {SequelizeInstance} instance
 * @param  {object} new_attrs
 * @return {null}
 *
 * A rundown of this function:
 * 1. Look up all the outgoing associations for the instance's model.
 * 2. Remove all existing associated instances from this instance.
 * 3. For each associated instance as described in new_attkrs, update it
 * 		if it already exists. Create it if it doesn't.
 * 4. Reassociate all old instances and associate new one.
 * 5. Save the instance.
 * 6. Return the updated populated object of this instance.
 */
import util from 'util'

function capitalizeFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const deepUpdate = (instance, new_attrs) => {

  const associations = instance._options.includeMap

  // includeMap is a dictionary of attribute name to Sequelize instance
  Object.keys(new_attrs).forEach(attr => {
    if((!associations) || (!associations[attr])){
      instance.set(attr, new_attrs[attr]);
    }
  });

  const update_associations = !associations ? [] : Object.keys(new_attrs).map((associated) => {

    if(new_attrs[associated] === undefined){
      return Promise.resolve()
    }

    const assoc = associations[associated]

    if (assoc) {
      // Retrieve the associated model
      const assoc_model = associations[associated].model

      const primary_key = Object.keys(assoc_model.primaryKeys)[0]

      // Determine whether this is a single association (containing one instance) or multi.
      const single = assoc.parent.hasSingleAssociation

      // Get the name of the prototype function on @instance that will set the associated
      // instances for this association. Seqeulize capitalizes the name of the model.
      const set_fnc_name = (assoc.as && ('set' + capitalizeFirst(assoc.as))) || ('set' + capitalizeFirst(single ? assoc_model.options.name.singular : assoc_model.options.name.plural))
      const add_fnc_name = (assoc.as && (((single && 'set') || 'add') + capitalizeFirst(assoc.as))) || ((single ? 'set' : 'add') + capitalizeFirst(single ? assoc_model.options.name.singular : assoc_model.options.name.plural))

      // Remove all existing associated instances for the current key
      let prom = instance[set_fnc_name](null)

      // Get the NEW object for that association field, as defined by new_attrs
      let val = new_attrs[associated]

      // If the val is set to null or an empty array, stop acting on this association (i.e. do not re-associate any records)
      if(val === null || (Array.isArray(val) && val.length === 0)){
        return prom;
      }

      if(!Array.isArray(val)) val = [val]

      // For each object in this association key
      const update_instances = val.map((obj) => {
        if (typeof obj === 'string' || typeof obj === 'number') {
          prom = prom.then(() => assoc_model.findById(obj))
        }

        // If the object has an ID, retrieve it and update it.
        else if (obj[primary_key]) {
          prom = prom.then(()=> assoc_model.findById(obj[primary_key], {include: [{all: true, nested: true}]})
          .then((result)=>{
            return deepUpdate(result, obj)
          }));
        }

        // If the object does not have an ID, it's new, so create it.
        else{
          prom = prom.then(()=> assoc_model.create(obj, {include: [{all: true}]}))
        }

        // Associate everything again.
        return prom
          .then((result)=>{

            // Determine which function on @instance prototype to use. "Add" fncs do not exist on single
            // assocations, only set.
            return instance[add_fnc_name](result)
          }).then((result)=>{
            return result;
          })
      })

      return Promise.all(update_instances)
    }

  })

  return Promise.all(update_associations)
    .then(()=> instance.save())
    .then(()=> instance.reload())
    .then(()=>{

      return instance;
    })
    .catch((err)=> console.log(err))
}

export default deepUpdate
