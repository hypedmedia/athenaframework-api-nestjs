import 'reflect-metadata';
import * as alt from 'alt-server';
import { NestFactory } from '@nestjs/core/nest-factory';
import { PluginSystem } from '../../../server/systems/plugins';
import { AthenaAPIModule } from './src/api/athenaAPIModule';

const PLUGIN_NAME = 'UNOFFICIAL Athena API';
const port = 9090;

PluginSystem.registerPlugin(PLUGIN_NAME, async () => {
    await bootstrap();
});

async function bootstrap() {
    const app = NestFactory.create(AthenaAPIModule);
    (await app).listen(port).then(() => {
        alt.log(`~lg~[PLUGIN] ==> ${PLUGIN_NAME} is listening on port ${port}`);
    });
}
