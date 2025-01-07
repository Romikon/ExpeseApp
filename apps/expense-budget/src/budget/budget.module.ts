import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IBudget } from './budget.entity';
import { BudgetService } from './budget.service';
import { BudgetController } from './budget.controller';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD.toString(),
      database: process.env.DB_DATABASENAME,
      entities: [IBudget],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([IBudget]),
  ],
  controllers: [BudgetController],
  providers: [BudgetService],
})
export class BudgetModule {}
