'use strict';
import knex, { Knex } from 'knex';
import config from './config';
import dbQuery from "./db";
import csv from 'csvtojson'
const csvFilePath = './app/ChhoeTaigiJoined.csv'

function insertheader(data: any[]) {
  let table = ''
  for (let index = 0; index < data.length; index++) {
    table = table + data[index] + ' text';
    if (index != data.length - 1) {
      table = table + ' ,'
    }
  }
  console.log("data:" ,table )
  let createtablestr = 'CREATE TABLE taigi ('+ table + ');'
  console.log('createtablestr:',createtablestr)
  dbQuery.raw(createtablestr)
    .then(function (result: { rows: any; }) {
      if (!config.IS_ENV_PRODUCTION) {
        console.log('apiV1.createDB(): result');
      }
      console.log('apiV1.createDB(): result');
    })
    .catch(function (error: any) {
      if (!config.IS_ENV_PRODUCTION) {
        console.log(`apiV1.createDB(): errors: ${error}.`);
      }

      // response.status(500);
    });
}

async function insertdata(data: string ) {
  console.log("data:" ,data) // => [["1","2","3"], ["4","5","6"], ["7","8","9"]]
  await dbQuery.raw(data)
    .then(function (result: { rows: any; }) {
      console.log(`success`);
    })
    .catch(function (error: any) {
      if (!config.IS_ENV_PRODUCTION) {
        console.log(`apiV1.createDB(): errors: ${error}.`);
      }

      // response.status(500);
    });
}
var rows: any[] = []

function createDB() {

  csv({
    noheader: false,
    output: "csv"
  })
    .fromFile(csvFilePath)
    .on('header', (headers: any) => { insertheader(headers) })
    .on('data', (data) => {
      let jsonStr = data.toString('utf8')
      jsonStr = jsonStr.replace(/\"/g, '\'');
      jsonStr = jsonStr.replace('[', '');
      jsonStr = jsonStr.replace(']', '');
      let datainsert = 'INSERT INTO taigi VALUES (' + jsonStr + ');'
      rows.push(datainsert)
      console.log("num:" , rows.length)
    
    }
    ).on('done',(done)=>{
      const chunkSize = 30;
      console.log("done:" , rows.length)
      console.log("done:" , rows)
     for (let index = 0; index < rows.length; index++) {
       insertdata(rows[index])
       
     }
  })
};


export default {
  createDB,
};
