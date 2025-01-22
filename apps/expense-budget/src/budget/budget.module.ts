import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BudgetEntity } from './budget.entity';
import { BudgetService } from './budget.service';
import { BudgetController } from './budget.controller';
import { typeOrmConfig } from '../config/config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([BudgetEntity]),
  ],
  controllers: [BudgetController],
  providers: [BudgetService],
})
export class BudgetModule {}
