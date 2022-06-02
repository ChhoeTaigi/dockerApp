'use strict';

import config from './config';
import { Request, Response, NextFunction } from 'express';
import dbQuery from "./db";

interface alltaigi {
  joinedwordid: string;
  dictcode: string;
  dictwordid: string;
  pojunicode:string;
  pojinput: string;
  hanlotaibunpoj: string;
  hanbunimpojunicode: string;
  hanbunimpojinput: string;
  kaisoehpoj: string;
  kaisoehhanlopoj: string;
  kipunicode:string;
  kipinput: string;
  hanbunimkipunicode: string;
  hanbunimkipinput: string;
  kaisoehkip: string;
  pagenumber: string;
  pojunicodeothers:string;
  pojinputothers: string;
  lekuhanlopoj: string;
  kipunicodeothers: string;
  kipinputothers: string;
  hanlotaibunkip: string;
  kaisoehhanLokip: string;
  lekuhanLokip: string;
  goanchhehpoochhiongchuliau: string;
  hoabun: string;
  engbun:string;
  kaisoehengbun: string;
  nounclassifier:string;
  lesupoj: string;
  opposite:string;
  lekupoj: string;
  lekuengbun: string;
  lekuhoabun: string;
  confer: string;
  abbreviation: string;
  reduplication:string;
  synonym:string;
  lmjunicode:string;
  lmjunicodeothers: string;
  storelink: string;
  kipdicthanjitaibunothers: string;
  kipdictwordproperty: string;
  kipdictdialects: string;
  dataprovidedby: string;
  soanntengmuithesekinpoochhiongchuliau: string;
  soanntengmuithesekinmuithemiachheng: string;
  soanntengmuithesekinhongsangjitki: string;
  soanntengmuithesekinlaigoanbangchi: string;
}


interface taigi {
  kipinput: string;
  kipunicode: string;
  pojinput: string;
  pojunicode: string;
  hanlotaibunpoj: string;
  hoabun: string;
  engbun: string;
}


const getChhoeKooe = async (request: Request, response: Response, next: NextFunction) => {
  const data = request.body["data"];
  const type = request.body["type"];
  const dictcode = request.body["dictcode"];
  var taigi: alltaigi = JSON.parse(data);
  if (!config.IS_ENV_PRODUCTION) {
    console.log('apiV1.getChhoeKooe()');
  }

  if ("siongkuan" == type) {
    let sql = ` SELECT * from taigi WHERE "dictcode" = \'${dictcode}\' AND`
    //1
    if (taigi.joinedwordid != "" && taigi.joinedwordid != undefined) {
      sql = sql + ` "joinedwordid" LIKE \'%${taigi.joinedwordid}%\' AND`
    }//2
    if (taigi.dictcode != "" && taigi.dictcode != undefined) {
      sql = sql + ` "dictcode" LIKE \'%${taigi.dictcode}%\' AND`
    }//3
    if (taigi.dictwordid != "" && taigi.dictwordid != undefined) {
      sql = sql +  ` "dictwordid" LIKE \'%${taigi.dictwordid}%\' AND`
    }//4
    if (taigi.pojunicode != "" && taigi.pojunicode != undefined) {
      sql = sql +  ` "pojunicode" LIKE \'%${taigi.pojunicode}%\' AND`
    }//5
    if (taigi.pojinput != "" && taigi.pojinput != undefined) {
      sql = sql +  ` "pojinput" LIKE \'%${taigi.pojinput}%\' AND`
    }//6
    if (taigi.hanlotaibunpoj != "" && taigi.hanlotaibunpoj != undefined) {
      sql = sql +  ` "hanlotaibunpoj" LIKE \'%${taigi.hanlotaibunpoj}%\' AND`
    }//7
    if (taigi.hanbunimpojunicode != "" && taigi.hanbunimpojunicode != undefined) {
      sql = sql +  ` "hanbunimpojunicode" LIKE \'%${taigi.hanbunimpojunicode}%\' AND`
    }//8
    if (taigi.hanbunimpojinput != "" && taigi.hanbunimpojinput != undefined) {
      sql = sql + ` "hanbunimpojinput" LIKE \'%${taigi.hanbunimpojinput}%\' AND`
    }//9
    if (taigi.kaisoehpoj != "" && taigi.kaisoehpoj != undefined) {
      sql = sql + ` "kaisoehpoj" LIKE \'%${taigi.kaisoehpoj}%\' AND`
    }//10
    if (taigi.kaisoehhanlopoj != "" && taigi.kaisoehhanlopoj != undefined) {
      sql = sql + ` "kaisoehhanlopoj" LIKE \'%${taigi.kaisoehhanlopoj}%\' AND`
    }//11
    if (taigi.kipunicode != "" && taigi.kipunicode != undefined) {
      sql = sql +  ` "kipunicode" LIKE \'%${taigi.kipunicode}%\' AND`
    }//12
    if (taigi.kipinput != "" && taigi.kipinput != undefined) {
      sql = sql +  ` "kipinput" LIKE \'%${taigi.kipinput}%\' AND`
    }//13
    if (taigi.hanbunimkipunicode != "" && taigi.hanbunimkipunicode != undefined) {
      sql = sql +  ` "hanbunimkipunicode" LIKE \'%${taigi.hanbunimkipunicode}%\' AND`
    }//14
    if (taigi.hanbunimkipinput != "" && taigi.hanbunimkipinput != undefined) {
      sql = sql +  ` "hanbunimkipinput" LIKE \'%${taigi.hanbunimkipinput}%\' AND`
    }//15
    if (taigi.kaisoehkip != "" && taigi.kaisoehkip != undefined) {
      sql = sql +  ` "kaisoehkip" LIKE \'%${taigi.kaisoehkip}%\' AND`
    }//16
    if (taigi.pagenumber != "" && taigi.pagenumber != undefined) {
      sql = sql + ` "pagenumber" LIKE \'%${taigi.pagenumber}%\' AND`
    }//17
    if (taigi.pojunicodeothers != "" && taigi.pojunicodeothers != undefined) {
      sql = sql + ` "pojunicodeothers" LIKE \'%${taigi.pojunicodeothers}%\' AND`
    }//18
    if (taigi.pojinputothers != "" && taigi.pojinputothers != undefined) {
      sql = sql + ` "pojinputothers" LIKE \'%${taigi.pojinputothers}%\' AND`
    }//19
    if (taigi.lekuhanlopoj != "" && taigi.lekuhanlopoj != undefined) {
      sql = sql +  ` "lekuhanlopoj" LIKE \'%${taigi.lekuhanlopoj}%\' AND`
    }//20
    if (taigi.kipunicodeothers != "" && taigi.kipunicodeothers != undefined) {
      sql = sql +  ` "kipunicodeothers" LIKE \'%${taigi.kipunicodeothers}%\' AND`
    }//21
    if (taigi.kipinputothers != "" && taigi.kipinputothers != undefined) {
      sql = sql +  ` "kipinputothers" LIKE \'%${taigi.kipinputothers}%\' AND`
    }//22
    if (taigi.hanlotaibunkip != "" && taigi.joinedwordid != undefined) {
      sql = sql +  ` "hanlotaibunkip" LIKE \'%${taigi.hanlotaibunkip}%\' AND`
    }//23
    if (taigi.kaisoehhanLokip != "" && taigi.kaisoehhanLokip != undefined) {
      sql = sql +  ` "kaisoehhanLokip" LIKE \'%${taigi.kaisoehhanLokip}%\' AND`
    }//24
    if (taigi.lekuhanLokip != "" && taigi.lekuhanLokip != undefined) {
      sql = sql + ` "lekuhanLokip" LIKE \'%${taigi.lekuhanLokip}%\' AND`
    }//25
    if (taigi.goanchhehpoochhiongchuliau != "" && taigi.goanchhehpoochhiongchuliau != undefined) {
      sql = sql + ` "goanchhehpoochhiongchuliau" LIKE \'%${taigi.goanchhehpoochhiongchuliau}%\' AND`
    }//26
    if (taigi.hoabun != "" && taigi.hoabun != undefined) {
      sql = sql + ` "hoabun" LIKE \'%${taigi.hoabun}%\' AND`
    }//27
    if (taigi.engbun != "" && taigi.engbun != undefined) {
      sql = sql +  ` "engbun" LIKE \'%${taigi.engbun}%\' AND`
    }//28
    if (taigi.kaisoehengbun != "" && taigi.kaisoehengbun != undefined) {
      sql = sql +  ` "kaisoehengbun" LIKE \'%${taigi.kaisoehengbun}%\' AND`
    }//29
    if (taigi.nounclassifier != "" && taigi.nounclassifier != undefined) {
      sql = sql +  ` "nounclassifier" LIKE \'%${taigi.nounclassifier}%\' AND`
    }//30
    if (taigi.lesupoj != "" && taigi.lesupoj != undefined) {
      sql = sql +  ` "lesupoj" LIKE \'%${taigi.lesupoj}%\' AND`
    }//31
    if (taigi.opposite != "" && taigi.opposite != undefined) {
      sql = sql +  ` "opposite" LIKE \'%${taigi.opposite}%\' AND`
    }//32
    if (taigi.lekupoj != "" && taigi.lekupoj != undefined) {
      sql = sql + ` "lekupoj" LIKE \'%${taigi.lekupoj}%\' AND`
    }//33
    if (taigi.lekuengbun != "" && taigi.lekuengbun != undefined) {
      sql = sql + ` "lekuengbun" LIKE \'%${taigi.lekuengbun}%\' AND`
    }//34
    if (taigi.lekuhoabun != "" && taigi.lekuhoabun != undefined) {
      sql = sql + ` "lekuhoabun" LIKE \'%${taigi.lekuhoabun}%\' AND`
    }//35
    if (taigi.confer != "" && taigi.confer != undefined) {
      sql = sql +  ` "confer" LIKE \'%${taigi.confer}%\' AND`
    }//36
    if (taigi.abbreviation != "" && taigi.abbreviation != undefined) {
      sql = sql +  ` "abbreviation" LIKE \'%${taigi.abbreviation}%\' AND`
    }//37
    if (taigi.reduplication != "" && taigi.reduplication != undefined) {
      sql = sql +  ` "reduplication" LIKE \'%${taigi.reduplication}%\' AND`
    }//38
    if (taigi.synonym != "" && taigi.synonym != undefined) {
      sql = sql +  ` "synonym" LIKE \'%${taigi.synonym}%\' AND`
    }//39
    if (taigi.lmjunicode != "" && taigi.lmjunicode != undefined) {
      sql = sql +  ` "lmjunicode" LIKE \'%${taigi.lmjunicode}%\' AND`
    }//40
    if (taigi.lmjunicodeothers != "" && taigi.lmjunicodeothers != undefined) {
      sql = sql +  ` "lmjunicodeothers" LIKE \'%${taigi.lmjunicodeothers}%\' AND`
    }//41
    if (taigi.storelink != "" && taigi.storelink != undefined) {
      sql = sql + ` "storelink" LIKE \'%${taigi.storelink}%\' AND`
    }//42
    if (taigi.kipdicthanjitaibunothers != "" && taigi.kipdicthanjitaibunothers != undefined) {
      sql = sql + ` "kipdicthanjitaibunothers" LIKE \'%${taigi.kipdicthanjitaibunothers}%\' AND`
    }//43
    if (taigi.kipdictwordproperty != "" && taigi.kipdictwordproperty != undefined) {
      sql = sql +  ` "kipdictwordproperty" LIKE \'%${taigi.kipdictwordproperty}%\' AND`
    }//44
    if (taigi.kipdictdialects != "" && taigi.kipdictdialects != undefined) {
      sql = sql +  ` "kipdictdialects" LIKE \'%${taigi.kipdictdialects}%\' AND`
    }//45
    if (taigi.dataprovidedby != "" && taigi.dataprovidedby != undefined) {
      sql = sql +  ` "dataprovidedby" LIKE \'%${taigi.dataprovidedby}%\' AND`
    }//46
    if (taigi.soanntengmuithesekinpoochhiongchuliau != "" && taigi.soanntengmuithesekinpoochhiongchuliau != undefined) {
      sql = sql +  ` "soanntengmuithesekinpoochhiongchuliau" LIKE \'%${taigi.soanntengmuithesekinpoochhiongchuliau}%\' AND`
    }//47
    if (taigi.soanntengmuithesekinmuithemiachheng != "" && taigi.soanntengmuithesekinmuithemiachheng != undefined) {
      sql = sql +  ` "soanntengmuithesekinmuithemiachheng" LIKE \'%${taigi.soanntengmuithesekinmuithemiachheng}%\' AND`
    }//48
    if (taigi.soanntengmuithesekinhongsangjitki != "" && taigi.soanntengmuithesekinhongsangjitki != undefined) {
      sql = sql + ` "soanntengmuithesekinhongsangjitki" LIKE \'%${taigi.soanntengmuithesekinhongsangjitki}%\' AND`
    }//49
    if (taigi.soanntengmuithesekinlaigoanbangchi != "" && taigi.soanntengmuithesekinlaigoanbangchi != undefined) {
      sql = sql + ` "soanntengmuithesekinlaigoanbangchi" LIKE \'%${taigi.soanntengmuithesekinlaigoanbangchi}%\' AND`
    }
    if ( "AND" == sql.substring(sql.length-3, sql.length)) {
      sql =  sql.substring(0, sql.length - 3);
    }
    console.log("sql :" ,sql )
    dbQuery.raw(sql)
      .then(function (result: { rows: any; }) {
        if (!config.IS_ENV_PRODUCTION) {
          console.log('getTaigi(): result');
        }
        response.status(200).json(result.rows);
      })
      .catch(function (error: any) {
        if (!config.IS_ENV_PRODUCTION) {
          console.log(`getTaigi(): errors: ${error}.`);
        }
        response.status(500);
      });
 
  } else {
    let sql = ` SELECT * from taigi WHERE "dictcode" = \'${dictcode}\' AND`
    //1
    if (taigi.joinedwordid != "" && taigi.joinedwordid != undefined) {
      sql = sql + ` "joinedwordid" = \'${taigi.joinedwordid}\' AND`
    }//2
    if (taigi.dictcode != "" && taigi.dictcode != undefined) {
      sql = sql + ` "dictcode" = \'${taigi.dictcode}\' AND`
    }//3
    if (taigi.dictwordid != "" && taigi.dictwordid != undefined) {
      sql = sql +  ` "dictwordid" = \'${taigi.dictwordid}\' AND`
    }//4
    if (taigi.pojunicode != "" && taigi.pojunicode != undefined) {
      sql = sql +  ` "pojunicode" = \'${taigi.pojunicode}\' AND`
    }//5
    if (taigi.pojinput != ""  && taigi.pojinput != undefined) {
      sql = sql +  ` "pojinput" = \'${taigi.pojinput}\' AND`
    }//6
    if (taigi.hanlotaibunpoj != "" && taigi.hanlotaibunpoj != undefined) {
      sql = sql +  ` "hanlotaibunpoj" = \'${taigi.hanlotaibunpoj}\' AND`
    }//7
    if (taigi.hanbunimpojunicode != "" && taigi.hanbunimpojunicode != undefined) {
      sql = sql +  ` "hanbunimpojunicode" = \'${taigi.hanbunimpojunicode}\' AND`
    }//8
    if (taigi.hanbunimpojinput != "" && taigi.hanbunimpojinput != undefined)  {
      sql = sql + ` "hanbunimpojinput" = \'${taigi.hanbunimpojinput}\' AND`
    }//9
    if (taigi.kaisoehpoj != "" && taigi.kaisoehpoj != undefined) {
      sql = sql + ` "kaisoehpoj" = \'${taigi.kaisoehpoj}\' AND`
    }//10
    if (taigi.kaisoehhanlopoj != "" && taigi.kaisoehhanlopoj != undefined) {
      sql = sql + ` "kaisoehhanlopoj" = \'${taigi.kaisoehhanlopoj}\' AND`
    }//11
    if (taigi.kipunicode != "" && taigi.kipunicode != undefined) {
      sql = sql +  ` "kipunicode" = \'${taigi.kipunicode}\' AND`
    }//12
    if (taigi.kipinput != "" && taigi.kipinput != undefined) {
      sql = sql +  ` "kipinput" = \'${taigi.kipinput}\' AND`
    }//13
    if (taigi.hanbunimkipunicode != "" && taigi.hanbunimkipunicode != undefined) {
      sql = sql +  ` "hanbunimkipunicode" = \'${taigi.hanbunimkipunicode}\' AND`
    }//14
    if (taigi.hanbunimkipinput != "" && taigi.hanbunimkipinput != undefined) {
      sql = sql +  ` "hanbunimkipinput" = \'${taigi.hanbunimkipinput}\' AND`
    }//15
    if (taigi.kaisoehkip != "" && taigi.kaisoehkip != undefined) {
      sql = sql +  ` "kaisoehkip" = \'${taigi.kaisoehkip}\' AND`
    }//16
    if (taigi.pagenumber != "" && taigi.pagenumber != undefined) {
      sql = sql + ` "pagenumber" = \'${taigi.pagenumber}\' AND`
    }//17
    if (taigi.pojunicodeothers != "" && taigi.pojunicodeothers != undefined) {
      sql = sql + ` "pojunicodeothers" = \'${taigi.pojunicodeothers}\' AND`
    }//18
    if (taigi.pojinputothers != "" && taigi.pojinputothers != undefined) {
      sql = sql + ` "pojinputothers" = \'${taigi.pojinputothers}\' AND`
    }//19
    if (taigi.lekuhanlopoj != "" && taigi.lekuhanlopoj != undefined) {
      sql = sql +  ` "lekuhanlopoj" = \'${taigi.lekuhanlopoj}\' AND`
    }//20
    if (taigi.kipunicodeothers != "" && taigi.kipunicodeothers != undefined) {
      sql = sql +  ` "kipunicodeothers" = \'${taigi.kipunicodeothers}\' AND`
    }//21
    if (taigi.kipinputothers != "" && taigi.kipinputothers != undefined) {
      sql = sql +  ` "kipinputothers" = \'${taigi.kipinputothers}\' AND`
    }//22
    if (taigi.hanlotaibunkip != "" && taigi.hanlotaibunkip != undefined) {
      sql = sql +  ` "hanlotaibunkip" = \'${taigi.hanlotaibunkip}\' AND`
    }//23
    if (taigi.kaisoehhanLokip != "" && taigi.kaisoehhanLokip != undefined) {
      sql = sql +  ` "kaisoehhanLokip" = \'${taigi.kaisoehhanLokip}\' AND`
    }//24
    if (taigi.lekuhanLokip != "" && taigi.lekuhanLokip != undefined)  {
      sql = sql + ` "lekuhanLokip" = \'${taigi.lekuhanLokip}\' AND`
    }//25
    if (taigi.goanchhehpoochhiongchuliau != "" && taigi.goanchhehpoochhiongchuliau != undefined) {
      sql = sql + ` "goanchhehpoochhiongchuliau" = \'${taigi.goanchhehpoochhiongchuliau}\' AND`
    }//26
    if (taigi.hoabun != "" && taigi.hoabun != undefined) {
      sql = sql + ` "hoabun" = \'${taigi.hoabun}\' AND`
    }//27
    if (taigi.engbun != "" && taigi.engbun != undefined) {
      sql = sql +  ` "engbun" = \'${taigi.engbun}\' AND`
    }//28
    if (taigi.kaisoehengbun != "" && taigi.kaisoehengbun != undefined) {
      sql = sql +  ` "kaisoehengbun" = \'${taigi.kaisoehengbun}\' AND`
    }//29
    if (taigi.nounclassifier != "" && taigi.nounclassifier != undefined) {
      sql = sql +  ` "nounclassifier" = \'${taigi.nounclassifier}\' AND`
    }//30
    if (taigi.lesupoj != "" && taigi.lesupoj != undefined) {
      sql = sql +  ` "lesupoj" = \'${taigi.lesupoj}\' AND`
    }//31
    if (taigi.opposite != "" && taigi.opposite != undefined) {
      sql = sql +  ` "opposite" = \'${taigi.opposite}\' AND`
    }//32
    if (taigi.lekupoj != "" && taigi.lekupoj != undefined) {
      sql = sql + ` "lekupoj" = \'${taigi.lekupoj}\' AND`
    }//33
    if (taigi.lekuengbun != "" && taigi.lekuengbun != undefined) {
      sql = sql + ` "lekuengbun" = \'${taigi.lekuengbun}\' AND`
    }//34
    if (taigi.lekuhoabun != "" && taigi.lekuhoabun != undefined) {
      sql = sql + ` "lekuhoabun" = \'${taigi.lekuhoabun}\' AND`
    }//35
    if (taigi.confer != "" && taigi.confer != undefined) {
      sql = sql +  ` "confer" = \'${taigi.confer}\' AND`
    }//36
    if (taigi.abbreviation != "" && taigi.abbreviation != undefined) {
      sql = sql +  ` "abbreviation" = \'${taigi.abbreviation}\' AND`
    }//37
    if (taigi.reduplication != "" && taigi.reduplication != undefined) {
      sql = sql +  ` "reduplication"  \'${taigi.reduplication}\' AND`
    }//38
    if (taigi.synonym != "" && taigi.synonym != undefined) {
      sql = sql +  ` "synonym" = \'${taigi.synonym}\' AND`
    }//39
    if (taigi.lmjunicode != "" && taigi.lmjunicode != undefined) {
      sql = sql +  ` "lmjunicode" = \'${taigi.lmjunicode}\' AND`
    }//40
    if (taigi.lmjunicodeothers != "" && taigi.lmjunicodeothers != undefined) {
      sql = sql +  ` "lmjunicodeothers" = \'${taigi.lmjunicodeothers}\' AND`
    }//41
    if (taigi.storelink != "" && taigi.storelink != undefined) {
      sql = sql + ` "storelink" = \'${taigi.storelink}\' AND`
    }//42
    if (taigi.kipdicthanjitaibunothers != "" && taigi.kipdicthanjitaibunothers != undefined) {
      sql = sql + ` "kipdicthanjitaibunothers" = \'${taigi.kipdicthanjitaibunothers}\' AND`
    }//43
    if (taigi.kipdictwordproperty != "" && taigi.kipdictwordproperty != undefined) {
      sql = sql +  ` "kipdictwordproperty" = \'${taigi.kipdictwordproperty}\' AND`
    }//44
    if (taigi.kipdictdialects != "" && taigi.kipdictdialects != undefined) {
      sql = sql +  ` "kipdictdialects" = \'${taigi.kipdictdialects}\' AND`
    }//45
    if (taigi.dataprovidedby != "" && taigi.dataprovidedby != undefined) {
      sql = sql +  ` "dataprovidedby" = \'${taigi.dataprovidedby}\' AND`
    }//46
    if (taigi.soanntengmuithesekinpoochhiongchuliau != "" && taigi.soanntengmuithesekinpoochhiongchuliau != undefined) {
      sql = sql +  ` "soanntengmuithesekinpoochhiongchuliau" = \'${taigi.soanntengmuithesekinpoochhiongchuliau}\' AND`
    }//47
    if (taigi.soanntengmuithesekinmuithemiachheng != "" && taigi.soanntengmuithesekinmuithemiachheng != undefined) {
      sql = sql +  ` "soanntengmuithesekinmuithemiachheng" = \'${taigi.soanntengmuithesekinmuithemiachheng}\' AND`
    }//48
    if (taigi.soanntengmuithesekinhongsangjitki != "" && taigi.soanntengmuithesekinhongsangjitki != undefined) {
      sql = sql + ` "soanntengmuithesekinhongsangjitki" = \'${taigi.soanntengmuithesekinhongsangjitki}\' AND`
    }//49
    if (taigi.soanntengmuithesekinlaigoanbangchi != "" && taigi.soanntengmuithesekinlaigoanbangchi != undefined) {
      sql = sql + ` "soanntengmuithesekinlaigoanbangchi" = \'${taigi.soanntengmuithesekinlaigoanbangchi}\' AND`
    }
    if ( "AND" == sql.substring(sql.length-3, sql.length)) {
      sql =  sql.substring(0, sql.length - 3);
    }
    console.log("sql :" ,sql )
    dbQuery.raw(sql)
      .then(function (result: { rows: any; }) {
        if (!config.IS_ENV_PRODUCTION) {
          console.log('getTaigi(): result');
        }
        response.status(200).json(result.rows);
      })
      .catch(function (error: any) {
        if (!config.IS_ENV_PRODUCTION) {
          console.log(`getTaigi(): errors: ${error}.`);
        }
        response.status(500);
      });
  }
};



const getSiongSe = async (request: Request, response: Response, next: NextFunction) => {
  const data = request.body["data"];


  if (!config.IS_ENV_PRODUCTION) {
    console.log('apiV1.getSiongSe()');
  }
    let sql = `SELECT *
    FROM taigi
    WHERE "joinedwordid" = \'${data}\'`

    dbQuery.raw(sql)
      .then(function (result: { rows: any; }) {
        if (!config.IS_ENV_PRODUCTION) {
          console.log('getTaigi(): result');
        }
        response.status(200).json(result.rows);
      })
      .catch(function (error: any) {
        if (!config.IS_ENV_PRODUCTION) {
          console.log(`getTaigi(): errors: ${error}.`);
        }
        response.status(500);
      });
 
  
};

const getLongChongChhoe = async (request: Request, response: Response, next: NextFunction) => {
  const data = request.body["data"];
  const type = request.body["type"];

  if (!config.IS_ENV_PRODUCTION) {
    console.log('apiV1.getLongChongChhoe()');
  }

  if ("siongkuan" == type) {
    let sql = `SELECT * 
    FROM taigi 
    WHERE concat(abbreviation,confer,dataprovidedby,dictcode,dictwordid,engbun,hanbunimkipinput,hanbunimkipunicode,hanbunimpojinput,hanbunimpojunicode,hanlotaibunkip,hanlotaibunpoj,hoabun,jitbun,joinedwordid,kaisoehengbun,kaisoehhanlokip,kaisoehhanlopoj,kaisoehkip,kaisoehpoj,kipdictdialects,kipdicthanjitaibunothers,kipdictwordproperty,kipinput,kipinputothers,kipunicode,kipunicodeothers,lekuengbun,lekuhanlokip,lekuhanlopoj,lekuhoabun,lekukip,lekupoj,lesupoj,lmjunicode,lmjunicodeothers,nounclassifier,opposite,pagenumber,pojinput,pojinputothers,pojunicode,pojunicodeothers,reduplication,soanntengmuithesekinhongsangjitki,soanntengmuithesekinlaigoanbangchi,soanntengmuithesekinmuithemiachheng,soanntengmuithesekinpoochhiongchuliau,storelink,synonym) like \'%${data}%\'`
    console.log(sql)
    dbQuery.raw(sql)
      .then(function (result: { rows: any; }) {
        if (!config.IS_ENV_PRODUCTION) {
          console.log('getTaigi(): result');
        }
        response.status(200).json(result.rows);
      })
      .catch(function (error: any) {
        if (!config.IS_ENV_PRODUCTION) {
          console.log(`getTaigi(): errors: ${error}.`);
        }
        response.status(500);
      });
 
  } else {
    let sql = `SELECT *
    FROM taigi
    WHERE \'${data}\' IN (abbreviation,confer,dataprovidedby,dictcode,dictwordid,engbun,hanbunimkipinput,hanbunimkipunicode,hanbunimpojinput,hanbunimpojunicode,hanlotaibunkip,hanlotaibunpoj,hoabun,jitbun,joinedwordid,kaisoehengbun,kaisoehhanlokip,kaisoehhanlopoj,kaisoehkip,kaisoehpoj,kipdictdialects,kipdicthanjitaibunothers,kipdictwordproperty,kipinput,kipinputothers,kipunicode,kipunicodeothers,lekuengbun,lekuhanlokip,lekuhanlopoj,lekuhoabun,lekukip,lekupoj,lesupoj,lmjunicode,lmjunicodeothers,nounclassifier,opposite,pagenumber,pojinput,pojinputothers,pojunicode,pojunicodeothers,reduplication,soanntengmuithesekinhongsangjitki,soanntengmuithesekinlaigoanbangchi,soanntengmuithesekinmuithemiachheng,soanntengmuithesekinpoochhiongchuliau,storelink,synonym)`
    console.log(sql)
    dbQuery.raw(sql)
      .then(function (result: { rows: any; }) {
        if (!config.IS_ENV_PRODUCTION) {
          console.log('getTaigi(): result');
        }
        response.status(200).json(result.rows);
      })
      .catch(function (error: any) {
        if (!config.IS_ENV_PRODUCTION) {
          console.log(`getTaigi(): errors: ${error}.`);
        }
        response.status(500);
      });
  }
};


const getKanTanChhoe = async (request: Request, response: Response, next: NextFunction) => {
  const data = request.body["data"];
  const type = request.body["type"];
  console.log("f======" , data)
  var taigi: taigi = JSON.parse(data);

  if (!config.IS_ENV_PRODUCTION) {
    console.log('apiV1.getKanTanChhoe()');
  }

  if ("siongkuan" == type) {
    let sql = 'SELECT * from taigi WHERE '
    if (taigi.kipinput != "" && taigi.kipinput != undefined) {
      sql = sql + ` "kipinput" LIKE \'%${taigi.kipinput}%\' AND`
    }
    if (taigi.kipunicode != "" && taigi.kipunicode != undefined) {
      sql = sql + ` "kipunicode" LIKE \'%${taigi.kipunicode}%\' AND`
    }
    if (taigi.pojinput != "" && taigi.pojinput != undefined) {
      sql = sql +  ` "pojinput" LIKE \'%${taigi.pojinput}%\' AND`
    }
    if (taigi.pojunicode != "" && taigi.pojunicode != undefined) {
      sql = sql +  ` "pojunicode" LIKE \'%${taigi.pojunicode}%\' AND`
    }
    if (taigi.hanlotaibunpoj != "" && taigi.hanlotaibunpoj != undefined) {
      sql = sql +  ` "hanlotaibunpoj" LIKE \'%${taigi.hanlotaibunpoj}%\' AND`
    }
    if (taigi.hoabun != "" && taigi.hoabun != undefined) {
      sql = sql +  ` "hoabun" LIKE \'%${taigi.hoabun}%\' AND`
    }
    if (taigi.engbun != "" && taigi.engbun != undefined) {
      sql = sql +  ` "engbun" LIKE \'%${taigi.engbun}%\' AND`
    }
    if ( "AND" == sql.substring(sql.length-3, sql.length)) {
      sql =  sql.substring(0, sql.length - 3);
    }
    console.log("sql :" ,sql )
    dbQuery.raw(sql)
      .then(function (result: { rows: any; }) {
        if (!config.IS_ENV_PRODUCTION) {
          console.log('getTaigi(): result');
        }
        response.status(200).json(result.rows);
      })
      .catch(function (error: any) {
        if (!config.IS_ENV_PRODUCTION) {
          console.log(`getTaigi(): errors: ${error}.`);
        }
        response.status(500);
      });
 
  } else {
    let sql = 'SELECT * from taigi WHERE '
    if (taigi.kipinput != "" && taigi.kipinput != undefined ) {
      sql = sql +  "kipinput =" + `\'${taigi.kipinput}\' AND`
    }
    if (taigi.kipunicode != "" && taigi.kipunicode != undefined) {
      sql = sql + ` "kipunicode" =\'${taigi.kipunicode}\' AND`
    }
    if (taigi.pojinput != "" && taigi.pojinput != undefined) {
      sql = sql +  ` "pojinput" =\'${taigi.pojinput}\' AND`
    }
    if (taigi.pojunicode != "" && taigi.pojunicode != undefined) {
      sql = sql +  ` "pojunicode" =\'${taigi.pojunicode}\' AND`
    }
    if (taigi.hanlotaibunpoj != "" && taigi.hanlotaibunpoj != undefined) {
      sql = sql +  ` "hanlotaibunpoj" =\'${taigi.hanlotaibunpoj}\' AND`
    }
    if (taigi.hoabun != "" && taigi.hoabun != undefined) {
      sql = sql +  ` "hoabun" =\'${taigi.hoabun}\' AND`
    }
    if (taigi.engbun != "" && taigi.engbun != undefined) {
      sql = sql +  ` "engbun" =\'${taigi.engbun}\' AND`
    }
    if ( "AND" == sql.substring(sql.length-3, sql.length)) {
      sql =  sql.substring(0, sql.length - 3);
    }
    console.log("sql :" ,sql )
    dbQuery.raw(sql)
      .then(function (result: { rows: any; }) {
        if (!config.IS_ENV_PRODUCTION) {
          console.log('getTaigi(): result');
        }
        response.status(200).json(result.rows);
      })
      .catch(function (error: any) {
        if (!config.IS_ENV_PRODUCTION) {
          console.log(`getTaigi(): errors: ${error}.`);
        }
        response.status(500);
      });
  }
};

const getTaiwan = async (request: Request, response: Response, next: NextFunction) => {
  if (!config.IS_ENV_PRODUCTION) {
    console.log('apiV1.getTaiwan()');
  }
  response.status(200).json('台灣獨立');

};

export default {
  getTaiwan,
  getKanTanChhoe,
  getLongChongChhoe,
  getSiongSe,
  getChhoeKooe
};
