import { NestFactory } from '@nestjs/core';
import { TransactionModule } from './transactions/transaction.module';
import { TransactionService } from './transactions/transaction.service';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(TransactionModule);
  const appService = app.get(TransactionService);
  await appService.connect();

  await app.listen(process.env.PORT);
  console.log('NestJS app running on http://127.0.0.1:8030');

  await app.startAllMicroservices();
}
bootstrap();
