import BullBoard from 'bull-board';
import Queue from './app/lib/Queue';

BullBoard.setQueues(Queue.queues.map(queue => queue.bull));

const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");

//Rotas
const index = require('./app/routes/index');
const userRoute = require('./app/routes/userRoute');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use('/', index);
app.use('/user', userRoute);
app.use('/admin/queues', BullBoard.UI);

module.exports = app;