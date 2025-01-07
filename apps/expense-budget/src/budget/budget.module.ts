import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IBudget } from './budget.entity';
import { BudgetService } from './budget.service';
import { BudgetController } from './budget.controller';
import * as dotenv from 'dotenv';
import { typeOrmConfig } from 'src/config/config';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([IBudget]),
  ],
  controllers: [BudgetController],
  providers: [BudgetService],
})
export class BudgetModule {}
