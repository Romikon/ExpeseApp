import * as dotenv from 'dotenv';
import { join } from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { BudgetEntity } from '../budget/budget.entity';
import { BalanceEntity } from '../balance/balance.entity';

dotenv.config({ path: join(__dirname, '../../../config/budget/.env') });

export const Config = () => {
  return {
    dbUser: process.env.POSTGRES_USER,
    dbPassword: process.env.POSTGRES_PASSWORD,
    dbName: process.env.POSTGRES_DB,
    port: process.env.PORT,
    dbHost: process.env.DB_HOST,
    dbPort: process.env.DB_PORT,
    dbSchema: process.env.DB_SCHEMA,
    Host: process.env.HOST,
    defaultUser: parseInt(process.env.DEFAULT_USER),
    defaultAmount: parseInt(process.env.DEFAUL_AMOUNT),
    typeOrmConfig: {
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [BudgetEntity, BalanceEntity],
      synchronize: true,
    } as TypeOrmModuleOptions,
  };
};
