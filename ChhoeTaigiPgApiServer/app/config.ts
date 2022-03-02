'use strict';

const config = {
    IS_ENV_PRODUCTION: process.env.NODE_ENV == 'production',

    HOST: '152.70.82.152',
    HOST_LOCAL: '152.70.82.152',

    PG_DEFAULT_DATABASE: 'postgres',
    PG_USER: 'root',
    PG_PSWD: 'root'
};

export default config;
