import express from 'express'
import { cities as controller } from "../controllers"

const router = express.Router()

router.get('/', controller.findAll)
router.get('/:id', controller.findById)

export default router
