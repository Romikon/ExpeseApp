import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
import { AppModule } from './app.module';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(process.env.PORT);
  console.log(`NestJS app running on http://127.0.0.1:${process.env.PORT}`);

  await app.startAllMicroservices();
}
bootstrap();
