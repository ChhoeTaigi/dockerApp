'use strict';

import express from 'express';
import apiV1 from './apiV1';



const { json, urlencoded } = express;
const app = express();
const port = 3247;

app.use(json());
app.use(urlencoded({
    extended: true,
  })
);

// api
app.post('/', (request, response) => {
    response.json({ info: 'https://chhoe.taigi.info/liaukai' });
});
app.get('/api/', (request, response) => {
    response.json({ info: 'ChhoeTaigi API. Beh iōng ài seng kap gún liân-lo̍k: https://chhoe.taigi.info/liaukai' });
});

// apiV1
app.get('/api/1/dictnames', apiV1.getDictNames);
app.get('/api/1/dictnames/:index', apiV1.getDictNameByIndex);
app.get('/api/1/dict/:dictName', apiV1.getDictByName);
app.get('/api/1/dict/:dictName/columns', apiV1.getDictColumnsByName);

// listen
app.listen(port, () => {
    console.log(`App running on port ${port}.`);
    console.log(`Node env: ${process.env.NODE_ENV}.`);
});
 