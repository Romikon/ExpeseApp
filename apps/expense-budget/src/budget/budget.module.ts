import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BudgetEntity } from './budget.entity';
import { BudgetService } from './budget.service';
import { BudgetController } from './budget.controller';
import { Config } from '../config/config';
import { BalanceModule } from '../balance/balance.module';

@Module({
  imports: [
    BalanceModule,
    TypeOrmModule.forRoot(Config().typeOrmConfig),
    TypeOrmModule.forFeature([BudgetEntity]),
  ],
  controllers: [BudgetController],
  providers: [BudgetService],
})
export class BudgetModule {}
