import bodyParser from 'body-parser'
import config from './config/config-env'
import express from 'express'
import http from 'http'
import morgan from 'morgan'
import router from './router'
import cors from "cors";

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.set('port', config.port)

app.use('/api', router)
app.get('*', (req, res) => res.status(405).send({
  message: 'Ups! this route does not exist',
}));

const server = http.createServer(app)

server.listen(config.port)

module.exports = app;
