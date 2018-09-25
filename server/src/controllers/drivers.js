import { Drivers, Drivers_Phones, States, Cities } from '../models'
import deepUpdate from '../helpers/deepUpdate'

module.exports = {
  /**
   * Create a Driver, if exist array of phone create it.
   *
   * @param {*} req
   * @param {*} res
   */
  create(req, res) {
    let data = {
      name: req.body.name,
      last_name: req.body.last_name,
      email: req.body.email,
      stateId: req.body.stateId,
      street: req.body.street,
      zipCode: req.body.zipCode,
      typeCar: req.body.typeCar,
      carYear: req.body.carYear,
    }
    if (req.body.phones) {
      data.phones = req.body.phones
    }
    Drivers.create(data, {
      include: [ 'phones' ]
    })
      .then(driver => res.status(201).send({
        message: `Driver created sussessfully`
      }))
      .catch((err) => {
        res.status(400).send(err)
      })
  },

  /**
   * Get Driver List with phones list.
   *
   * @param {*} req
   * @param {*} res
   */
  findAll(req, res) {
    Drivers.findAll({
      attributes: {
        exclude: ['CityId', 'StateId']
      },
      include: [
        { model: Drivers_Phones, as: 'phones' },
        { model: States },
      ]
    })
      .then(driver => res.send(driver))
      .catch(err => res.status(400).send(err))
  },

  /**
   * Get Driver by #ID.
   *
   * @param {*} req
   * @param {*} res
   */
  findById(req, res) {
    Drivers.findById(req.params.id, {
      attributes: {
        exclude: ['CityId', 'StateId']
      },
      include: [
        { model: Drivers_Phones, as: 'phones' },
        { model: States },
      ]
    })
      .then(driver => {
        if (!driver) {
          return res.status(404).send({
            message: 'Driver Not Found'
          })
        }
        res.status(200).send(driver)
      })
      .catch(err => res.status(400).send(err))
  },

  /**
   * Update a Driver.
   *
   * @param {*} req
   * @param {*} res
   */
  update(req, res) {
    Drivers.findById(req.params.id, {
        include: [
          { model: Drivers_Phones, as: 'phones' }
        ]
    })
      .then(driver => {
        if (!driver) {
          return res.status(404).send({
            message: 'Driver Not Found'
          })
        }
        return deepUpdate(driver, req.body)
      })
      .then(driver => res.send({
        message: `Driver updated successfully`
      }))
      .catch(err => res.status(400).send(err))
  },

  /**
   * Remove a Driver by #ID.
   *
   * @param {*} req
   * @param {*} res
   */
  delete(req, res) {
    Drivers.findById(req.params.id)
      .then(driver => {
        if (!driver) {
          return res.status(404).send({
            message: 'Driver Not Found'
          })
        }
        driver.destroy()
          .then(() => res.status(200).send({
            message: 'Driver deleted sussessfully'
          }))
          .catch(err => res.status(400).send(err))
      })
      .catch(err => res.status(400).send(err))
  }
}
