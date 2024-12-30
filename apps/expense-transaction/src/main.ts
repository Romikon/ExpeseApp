import { NestFactory } from '@nestjs/core';
import { TransactionModule } from './transactions/transaction.module';
import { TransactionService } from './transactions/transaction.service';

async function bootstrap() {
  const app = await NestFactory.create(TransactionModule);
  const appService = app.get(TransactionService);
  await appService.connect();

  await app.listen(8030);
  console.log('NestJS app running on http://127.0.0.1:8030');

  await app.startAllMicroservices();
}
bootstrap();
