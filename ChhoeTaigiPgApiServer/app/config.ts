'use strict';

const config = {
    IS_ENV_PRODUCTION: process.env.NODE_ENV == 'production',

    HOST: '192.168.1.10',
    HOST_LOCAL: '192.168.1.10',

    PG_DEFAULT_DATABASE: 'postgres',
    PG_USER: 'postgres',
    PG_PSWD: 'qazxcvbnm'
};

export default config;
