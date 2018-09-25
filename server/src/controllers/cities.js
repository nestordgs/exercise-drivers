import { Cities } from '../models'

module.exports = {
  /**
   * Get Cities List.
   *
   * @param {*} req
   * @param {*} res
   */
  findAll(req, res) {
    Cities.findAll()
      .then((cities => res.send(cities)))
      .catch(err => res.status.send(err))
  },

  /**
   * Get Cities by #ID.
   *
   * @param {*} req
   * @param {*} res
   */
  findById(req, res) {
    Cities.findById(req.params.id)
      .then((city) => {
        if (!city) {
          return res.status(404).send({
            message: 'City Not Found'
          })
        }
        res.status(200).send(city)
      })
      .catch(err => res.status(400).send(err))
  }
}
