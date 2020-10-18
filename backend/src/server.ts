import express from 'express';

import './database/connection'

const app = express();

app.use(express.json())

app.get('/users', (request, response) => {
  response.json({ message: 'Hello World Happy'})
})

app.listen(3333);