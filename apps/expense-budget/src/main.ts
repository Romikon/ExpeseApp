import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';
import { Config } from './config/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableShutdownHooks();
  app.useLogger(app.get(Logger));
  const config = new DocumentBuilder()
    .setTitle('Budget')
    .setDescription('Budget endpoints')
    .setVersion('1.0')
    .addTag('budget')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  await app.listen(Config().port);
  console.log(`NestJS app running on http://127.0.0.1:${Config().port}`);
}

bootstrap();
