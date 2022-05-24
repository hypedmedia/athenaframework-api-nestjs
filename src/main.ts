import { NestFactory } from '@nestjs/core';
import { configAPI } from './config';
import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(configAPI.apiPort).then(() => {
    console.log(`[${configAPI.apiName}] ==> Listening on port ${configAPI.apiPort}`);
  });
}
bootstrap();
