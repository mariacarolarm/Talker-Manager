const express = require('express');
const { returnTalkers, router } = require('./routers/talkers.routes');
const loginRouter = require('./routers/login.routes');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || '3001';

app.get('/talker', returnTalkers);

app.get('/', (_request, response) => {
  response.status(200).send();
});

app.use(router);
app.use('/login', loginRouter);

app.listen(PORT, () => {
  console.log('Online');
});