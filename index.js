import path from 'path';
import express from 'express';

import config from './config';

import {homeRouter, cakesRouter} from './src/routes/index.js';

const app = express();
const PORT = config.PORT;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', homeRouter);
app.use('/cakes', cakesRouter);

app.listen(PORT, () =>
  console.log(`Server is running on port ${PORT}`)
);
