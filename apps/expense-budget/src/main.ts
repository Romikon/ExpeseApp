import { NestFactory } from '@nestjs/core';
import { BudgetModule } from './budget/budget.module';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(BudgetModule);
  await app.listen(process.env.PORT);
  console.log('NestJS app running on http://127.0.0.1:8025');
}

bootstrap();
