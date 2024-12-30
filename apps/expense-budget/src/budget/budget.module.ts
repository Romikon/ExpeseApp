import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IBudget, IUpdateBudget } from './budget.entity';
import { BudgetService } from './budget.service';
import { AppController } from './budget.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'roman1',
      password: '123123',
      database: 'budget',
      entities: [IBudget, IUpdateBudget],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([IBudget, IUpdateBudget]),
  ],
  controllers: [AppController],
  providers: [BudgetService],
})
export class BudgetModule {}
