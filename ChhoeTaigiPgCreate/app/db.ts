'use strict';

import knex, { Knex } from 'knex';
import config from './config';

let dbQuery: Knex;
if (config.IS_ENV_PRODUCTION) {
  dbQuery = knex({
    client: 'pg',
    connection: {
        host: config.HOST,
        database: config.PG_DEFAULT_DATABASE,
        user: config.PG_USER,
        password: config.PG_PSWD,
    },
    pool: {
      min: 1,
      max: 20,
    },
  });
} else {
  dbQuery = knex({
    client: 'pg',
    connection: {
      host: config.HOST_LOCAL,
      database: config.PG_DEFAULT_DATABASE,
      user: config.PG_USER,
      password: config.PG_PSWD,
    },
    pool: {
      min: 1,
      max: 20,
    },
  });
}

export default dbQuery;
