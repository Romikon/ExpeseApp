import { Module } from '@nestjs/common';
import { BudgetModule } from './budget/budget.module';
import { HealthModule } from './health';
import { DatabaseService } from './shutdown-hook/database.hutdown.hook';

@Module({
  imports: [
    BudgetModule,
    HealthModule
  ],
  controllers: [],
  providers: [DatabaseService],
})
export class AppModule {}
