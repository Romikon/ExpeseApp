import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from './config/config'
import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableShutdownHooks();
  app.useLogger(app.get(Logger));
  await app.listen(config.port);
  console.log(`NestJS app running on http://127.0.0.1:${config.port}`);
}

bootstrap();
