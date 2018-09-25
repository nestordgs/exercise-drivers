import { Type_Cars } from '../models'

module.exports = {
  /**
   * Get Type Car List.
   *
   * @param {*} req
   * @param {*} res
   */
  findAll(req, res) {
    Type_Cars.findAll()
      .then((typeCars => res.send(typeCars)))
      .catch(err => res.status.send(err))
  },

  /**
   * Get Type Car by #ID.
   *
   * @param {*} req
   * @param {*} res
   */
  findById(req, res) {
    Type_Cars.findById(req.params.id)
      .then((typeCar) => {
        if (!typeCar) {
          return res.status(404).send({
            message: 'Type Car Not Found'
          })
        }
        res.status(200).send(typeCar)
      })
      .catch(err => res.status(400).send(err))
  }
}
