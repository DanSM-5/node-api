import express from 'express';

import {PORT} from './config';

import {homeRouter, cakesRouter} from './src/routes/index.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', homeRouter);
app.use('/cakes', cakesRouter);

app.listen(PORT, (error) => {
    if(error){
        console.log(error);
    }
    console.log(`Server is running on port ${PORT}`)
    }
);
