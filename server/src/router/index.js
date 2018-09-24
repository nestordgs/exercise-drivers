import express from 'express'
import driverRoutes from './drivers'

const router = express.Router()

router.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to the driver register API!',
}))

router.use('/drivers', driverRoutes)

export default router
