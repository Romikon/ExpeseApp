import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Config } from '../src/config/config';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableShutdownHooks();
  app.useLogger(app.get(Logger));
  const config = new DocumentBuilder()
    .setTitle('Transaction')
    .setDescription('Transaction endpoints')
    .setVersion('1.0')
    .addTag('transaction')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  await app.listen(Config().port);
  console.log(`NestJS app running on http://${Config().Host}:${Config().port}`);
}
bootstrap();
