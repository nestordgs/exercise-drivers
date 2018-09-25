import { Drivers, Drivers_Phones, States, Cities, Type_Cars } from '../models'
import deepUpdate from '../helpers/deepUpdate'
import braintree from 'braintree'
import config from "../config/config-env";
import { Op } from 'sequelize'

module.exports = {
  /**
   * Create a Driver, if exist array of phone create it.
   *
   * @param {*} req
   * @param {*} res
   */
  async create (req, res) {
    let data = {
      name: req.body.name,
      last_name: req.body.last_name,
      email: req.body.email,
      stateId: req.body.stateId,
      cityId: req.body.cityId,
      street: req.body.street,
      zipCode: req.body.zipCode,
      typeCarId: req.body.typeCarId,
      carYear: req.body.carYear,
    }
    if (req.body.phones) {
      data.phones = req.body.phones
    }
    try {
      const driver = await Drivers.create(data, {
        include: ['phones']
      })
      const gateway = await braintree.connect({
        environment: braintree.Environment.Sandbox,
        merchantId: config.merchantId,
        publicKey: config.publicKey,
        privateKey: config.privateKey
      })

      const clientBraintree = await gateway.customer.create({
        firstName: driver.name,
        lastName: driver.last_name,
        email: driver.email
      })

      if (clientBraintree.success) {
        const customerId = clientBraintree.customer.id
        const creditCardParams = {
          customerId,
          number: req.body.creditCard.number,
          expirationDate: req.body.creditCard.expire,
          cvv: req.body.creditCard.cvv
        }
        const creditCard = await gateway.creditCard.create(creditCardParams)
        if (creditCard.success) {
          res.status(201).send({
            message: 'Driver, Client Braintree and Credit Card created successfully'
          })
        } else {
          return res.status(400).send(creditCard)
        }
      } else {
        return res.status(400).send(clientBraintree)
      }
    } catch (err) {
      res.status(400).send(err)
    }
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
        exclude: ['CityId', 'StateId', 'TypeCarId']
      },
      include: [
        { model: Drivers_Phones, as: 'phones' },
        { model: States },
        { model: Cities },
        { model: Type_Cars },
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
        exclude: ['CityId', 'StateId', 'typeCar']
      },
      include: [
        { model: Drivers_Phones, as: 'phones' },
        { model: States },
        { model: Cities },
        { model: Type_Cars },
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
  async update(req, res) {
    try {
      const driver = await Drivers.findById(req.params.id)
      if (!driver) {
        return res.status(404).send({
          message: 'Driver Not Found'
        })
      }
      const update = await driver.update({
        name: req.body.name,
        last_name: req.body.last_name,
        email: req.body.email,
        stateId: req.body.stateId,
        cityId: req.body.cityId,
        street: req.body.street,
        zipCode: req.body.zipCode,
        typeCarId: req.body.typeCarId,
        carYearcarYear: req.body.carYear,
      })
      if (update) {
        const currentPhones = await Drivers_Phones.findAll({
          where: {
            driverId: req.params.id
          }
        })
        let ids = req.body.phones.map((v) => {
          if (v.id || typeof v.id !== undefined) {
            return v.id
          }
        }).filter(a => a)
        Drivers_Phones.destroy({
          where: {
            id: {
              [Op.notIn]: ids
            },
            driverId: req.params.id,
          }
        })
        .then()
        .catch(err => res.status(400).send(err))
        req.body.phones.forEach(phone => {
          if (!phone.id) {
            Drivers_Phones.create({
              number: phone.number,
              driverId: req.params.id
            })
            .then()
            .catch(err => res.status(400).send(err))
          } else {
            currentPhones.forEach(current => {
              if (current.id === phone.id) {
                current.update({
                  number: phone.number
                })
                .then()
                .catch(err => res.status(400).send(err))
              }
            })
          }
        });
        res.status(200).send({
          message: `Driver updated successfully`
        })
      } else {
        return res.status(400).send("Somthing went wrong")
      }
    } catch (err) {
      return res.status(400).send(err)
    }

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
