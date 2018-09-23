import bodyParser from 'body-parser'
import config from './config/config'
import express from 'express'
import http from 'http'
import morgan from 'morgan'
import router from './router'

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.set('port', config.port)

app.use(router)

const server = http.createServer(app)

server.listen(config.port)

module.exports = app;
