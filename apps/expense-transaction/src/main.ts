import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from '../src/config/config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(config.port);
  console.log(`NestJS app running on http://127.0.0.1:${config.port}`);

  await app.startAllMicroservices();
}
bootstrap();
