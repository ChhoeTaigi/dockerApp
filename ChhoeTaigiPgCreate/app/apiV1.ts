'use strict';
import fs from 'fs';
import through2 from 'through2';
import csvtojson from 'csvtojson';
import dbQuery from "./db";

const csvFilePath = './app/ChhoeTaigiJoined.csv'

let isDBCreated: Promise<any>;

async function createTaigiDBFromHeader(data: any[]) {
  await dbQuery.schema.dropTableIfExists('taigi');
  await dbQuery.schema.createTable('taigi', function (table) {
    table.increments();
    data.map(columnName => {
      table.text(columnName.toString());
    })
  });
  await dbQuery('taigi').count('id');
  console.log(`"taigi" table is ready.`);
}

async function batchInsertList(rowList: Array<Object>) {
  try {
    await isDBCreated;
    // console.log(rowList)
    const idList = await dbQuery.insert( rowList, ['id']).into('taigi');
    console.log(`Batch ${idList.length}.`);
    // console.log(idList.map(({ id }) => id));
  } catch (e) {
    console.error(e);
  }
}

let once = false;

function createDB() {
  const csv = csvtojson();
  csv.on('header', (headers: any) => { 
    isDBCreated = createTaigiDBFromHeader(headers) 
  });

  fs.createReadStream(csvFilePath)
  .pipe(csv)
  .pipe(through2({ objectMode: true }, function transform(this: any, chunk: Buffer, enc: string, callback: any) {
    this.rowList = this.rowList || [];
    if (this.rowList.length < 1000) {
      try {
        this.rowList.push(JSON.parse(chunk.toString()))
      } catch (e) {
        console.error(e)
      }
    } else {
      this.push(this.rowList);
      this.rowList = [];
    }
    callback()
  }, function flush(this: any, callback: any) {
    this.push(this.rowList);
    callback();
  }))
  .pipe(through2({ objectMode: true }, function (this: any, rowList: Array<Object>, enc: string, callback: any) {
    // if (once) {
    //   return;
    // }
    // once = true;
    batchInsertList(rowList).then(callback)
  }))
  .on('finish', async () => {
    const [{ count }] = await dbQuery('taigi').count({ count: '*' });
    const lastRow = await dbQuery('taigi').where('JoinedWordID', '353511').select();

    console.log(`All ${count} rows are inserted.`);
    console.log(`Last row is: `, lastRow);
  });
};

export default {
  createDB,
};
