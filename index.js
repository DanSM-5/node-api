import express from 'express';

import config from './config';

import {homeRouter, cakesRouter} from './src/routes/index.js';

const app = express();
const PORT = config.PORT;

app.use(express.json()); // built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser
app.use(express.urlencoded({extended: false})); // is a method inbuilt in express to recognize the incoming Request Object as strings or arrays.

app.use('/', homeRouter);
app.use('/cakes', cakesRouter);

app.listen(PORT, (error) => {
    if (error) {
        console.log(error)
    }
    console.log(`Server is running on port ${PORT}`)
});
