import 'dotenv/config';
import BullBoard from 'bull-board';
import Queue from './app/lib/Queue';

BullBoard.setQueues(Queue.queues.map(queue => queue.bull));

const app = require('../src/app');

app.listen(process.env.PORT, () => {
    console.log(`Server running on the ${process.env.PORT}`)
});
