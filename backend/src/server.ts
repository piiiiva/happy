import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  response.json({ message: 'Hello World Happy'})
})

app.listen(3333);