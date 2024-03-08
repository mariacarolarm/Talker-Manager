const express = require('express');
const { returnTalkers } = require('./routers/talkers.routes');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || '3001';

app.get('/talker', returnTalkers);

app.get('/', (_request, response) => {
  response.status(200).send();
});

app.listen(PORT, () => {
  console.log('Online');
});