'use strict';

import * as moduleAlias from 'module-alias';
moduleAlias.addAliases({
    '@': './src',
});

import * as dotenv from 'dotenv'
dotenv.config()
import chalk from 'chalk';
import fastify from 'fastify';
const server = fastify({ logger: true });
import fastifyAxios from 'fastify-axios'
import cors from '@fastify/cors';
import jwt from '@fastify/jwt'
import routes from './routes/index.js';
console.group(chalk.bgGreen('                    🚀 API                    '));

const corsConfig = () => {
    return {
        origin: '*',
        allowedHeaders: ['Content-Type', 'Authorization'],
    };
};


const startAPI = async () => {
    try {
        await server.register(routes).after(() => {
            console.log(chalk.blue(chalk.bgBlue(' [Plugin] '), ' 🛣️ Routes Loaded'));
        });

        await server.register(jwt, { secret: 'UwU', }).after(() => {
            console.log(chalk.blue(chalk.bgBlue(' [Plugin] '), ' 🔒 JWT Plugin Loaded'));
        });

        await server.register(cors, corsConfig()).after(() => {
            console.log(chalk.blue(chalk.bgBlue(' [Plugin] '), ' 🌍 CORS Plugin Loaded'));
        });

        await server.register(fastifyAxios).after(() => {
            console.log(chalk.blue(chalk.bgBlue(' [Plugin] '), ' 🌍 Axios Plugin Loaded'));
        });




        await server.listen({ port: process.env.PORT || 5000, host: process.env.HOST });
        console.log(chalk.blue(chalk.bgGreen(' [Server] '), ' 🚀 API Online'));
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
}
await startAPI()