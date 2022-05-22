import 'reflect-metadata';

import * as alt from 'alt-server';
import { NestFactory } from '@nestjs/core/nest-factory';
import { PluginSystem } from '../../../server/systems/plugins';
import { AthenaAPIModule } from './src/api/modules/api-athena.module';

import 'dotenv';
import Database from '@stuyk/ezmongodb';
import { configAPI } from './src/config';

/** Can be imported if you need it.
import axios from 'axios';
import { generateApiUser } from './src/functions/generateApiUser';
*/

const PLUGIN_NAME = 'UNOFFICIAL Athena API';
const port = 9090;

PluginSystem.registerPlugin(PLUGIN_NAME, async () => {
    await Database.createCollection(configAPI.dbCollection);
    await bootstrap();

    // This will generate a user which can be used in a .env file (external access in example.)
    // generateApiUser('ExampleName', 'ExamplePassword');

    /* Just a little Example how to talk to the API when the Endpoint is secured through basic strategy.
     */

    /**
     * @param {string} username
     * @param {string} password
     * @returns {Promise<any>}
     * @constructor
     * @example
        axios
        .get('http://localhost:9090/players/all', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Basic ${Buffer.from(`${process.env.API_USER}:${process.env.API_PASSWORD}`).toString(
                    'base64',
                )}`,
            },
        })
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
        */
});

async function bootstrap() {
    const app = NestFactory.create(AthenaAPIModule);
    (await app).listen(port).then(() => {
        alt.log(`~lg~[PLUGIN] ==> ${PLUGIN_NAME} is listening on port ${port}`);
    });
}
