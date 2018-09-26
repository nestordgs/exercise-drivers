import express from 'express'
import driverRoutes from './drivers'
import stateRouter from './states'
import cityRouter from './cities'
import typeCarRouter from './type_cars'

const router = express.Router()

router.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to the driver register API!',
}))

router.use('/drivers', driverRoutes)
router.use('/states', stateRouter)
router.use('/cities', cityRouter)
router.use('/typeCars', typeCarRouter)

export default router
