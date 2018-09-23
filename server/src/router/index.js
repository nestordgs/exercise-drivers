import express from 'express'

const router = express.Router()

router.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to this little app',
}))

export default router
