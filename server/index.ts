import 'reflect-metadata';
import { NestFactory } from '@nestjs/core/nest-factory';
import { PluginSystem } from '../../../server/systems/plugins';
import { AthenaAPIModule } from './src/api/athenaAPIModule';


const PLUGIN_NAME = 'Athena API';
const port = 9090;

PluginSystem.registerPlugin(PLUGIN_NAME, async () => {
    await bootstrap();
});

async function bootstrap() {
    const app = NestFactory.create(AthenaAPIModule);
    (await app).listen(port).then(() => {
        console.log(`${PLUGIN_NAME} is running on port ${port}`);
    });
}
