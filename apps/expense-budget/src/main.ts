import { NestFactory } from '@nestjs/core';
import { BudgetModule } from './budget/budget.module';

async function bootstrap() {
  const app = await NestFactory.create(BudgetModule);
  await app.listen(8025);
  console.log('NestJS app running on http://127.0.0.1:8025');
}

bootstrap();
