import { States } from '../models'

module.exports = {
  /**
   * Get States List.
   *
   * @param {*} req
   * @param {*} res
   */
  findAll(req, res) {
    States.findAll()
      .then((states => res.send(states)))
      .catch(err => res.status.send(err))
  },

  /**
   * Get Driver by #ID.
   *
   * @param {*} req
   * @param {*} res
   */
  findById(req, res) {
    States.findById(req.params.id)
      .then((state) => {
        if (!state) {
          return res.status(404).send({
            message: 'State Not Found'
          })
        }
        res.status(200).send(state)
      })
      .catch(err => res.status(400).send(err))
  }
}
