'use strict';

import express from 'express';
import apiV1 from './apiV1';
const multer = require('multer');
const upload = multer();

const { json, urlencoded } = express;
const app = express();
const port = 3247;

app.use(json());
app.use(urlencoded({
    extended: true,
  })
);

// apiV1
app.post('/api/getTaiwan',upload.none(), apiV1.getTaiwan);
app.post('/api/getTaigi',upload.none(), apiV1.getKanTanChhoe);
app.post('/api/getLongChongChhoe',upload.none(), apiV1.getLongChongChhoe);
app.post('/api/getSiongSe',upload.none(), apiV1.getSiongSe);
app.post('/api/getChhoeKooe',upload.none(), apiV1.getChhoeKooe);
// listen
app.listen(port, () => {
    console.log(`App running on port ${port}.`);
    console.log(`Node env: ${process.env.NODE_ENV}.`);
});
 