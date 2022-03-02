'use strict';

import config from './config';
import { Request, Response, NextFunction } from 'express';
import dbQuery from "./db";

const getDictNames = async (request: Request, response: Response, next: NextFunction) => {
  if (!config.IS_ENV_PRODUCTION) {
    console.log('apiV1.getDictNames()');
  }

  dbQuery.raw('SELECT table_name FROM information_schema.tables WHERE table_schema = current_schema()')
    .then(function (result: { rows: any; }) {
      if (!config.IS_ENV_PRODUCTION) {
        console.log('apiV1.getDictNames(): result');
      }

      response.status(200).json(result.rows);
    })
    .catch(function (error: any) {
      if (!config.IS_ENV_PRODUCTION) {
        console.log(`apiV1.getDictNames(): errors: ${error}.`);
      }

      response.status(500);
    });
};

const getDictNameByIndex = async (request: Request, response: Response, next: NextFunction) => {
  const index = parseInt(request.params.index);

  if (!config.IS_ENV_PRODUCTION) {
    console.log('apiV1.getDictNameByIndex()');
  }

  dbQuery.raw('SELECT table_name FROM information_schema.tables WHERE table_schema = current_schema()')
    .then(function (result: { rows: any[]; }) {
      if (!config.IS_ENV_PRODUCTION) {
        console.log('apiV1.getDictNameByIndex(): result');
      }

      response.status(200).json(result.rows[index]);
    })
    .catch(function (error: any) {
      if (!config.IS_ENV_PRODUCTION) {
        console.log(`apiV1.getDictNameByIndex(): errors: ${error}.`);
      }

      response.status(500);
    });
};

const getDictByName = async (request: Request, response: Response, next: NextFunction) => {
  const dictName = request.params.dictName;

  if (!config.IS_ENV_PRODUCTION) {
    console.log('apiV1.getDictByName()');
  }

  dbQuery.raw(`SELECT * FROM \"${dictName}\"`)
    .then(function (result: { rows: any; }) {
      if (!config.IS_ENV_PRODUCTION) {
        console.log('apiV1.getDictByName(): result');
      }

      response.status(200).json(result.rows);
    })
    .catch(function (error: any) {
      if (!config.IS_ENV_PRODUCTION) {
        console.log(`apiV1.getDictByName(): errors: ${error}.`);
      }

      response.status(500);
    });
};

const getDictColumnsByName = async (request: Request, response: Response, next: NextFunction) => {
  const dictName = request.params.dictName;

  if (!config.IS_ENV_PRODUCTION) {
    console.log('apiV1.getDictColumnsByName()');
  }

  dbQuery(`${dictName}`).columnInfo()
    .then(function (result) {
      if (!config.IS_ENV_PRODUCTION) {
        console.log('apiV1.getDictColumnsByName(): result');
      }

      response.status(200).json(result);
    })
    .catch(function (error: any) {
      if (!config.IS_ENV_PRODUCTION) {
        console.log(`apiV1.getDictColumnsByName(): errors: ${error}.`);
      }

      response.status(500);
    });
};

export default {
  getDictNames,
  getDictNameByIndex,
  getDictByName,
  getDictColumnsByName,
};
