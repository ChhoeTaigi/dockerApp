'use strict';

const config = {
    IS_ENV_PRODUCTION: process.env.NODE_ENV == 'production',

    HOST: '192.168.1.222',
    HOST_LOCAL: 'pg_container',

    PG_DEFAULT_DATABASE: 'postgres',
    PG_USER: 'root',
    PG_PSWD: 'root'
};

export default config;
