import { NestFactory } from '@nestjs/core';
import { UserModule } from './users/user.module';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(UserModule);
  await app.listen(process.env.PORT);
  console.log(`NestJS app running on http://127.0.0.1:${process.env.PORT}`);
}
bootstrap();
