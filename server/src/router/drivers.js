import express from "express"
import { drivers as controller } from '../controllers'

const router = express.Router()

router.get('/', controller.findAll)
router.post('/', controller.create)
router.get('/:id', controller.findById)
router.put('/:id', controller.update)
router.delete('/:id', controller.delete)

export default router
