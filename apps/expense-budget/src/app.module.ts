import { Module } from '@nestjs/common';
import { BudgetModule } from './budget/budget.module';
import { HealthModule } from './health';

@Module({
  imports: [
    BudgetModule,
    HealthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
