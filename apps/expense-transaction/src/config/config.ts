import * as dotenv from 'dotenv';
import { join } from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { TransactionEntity } from '../transactions/transaction.entity';

dotenv.config({ path: join(__dirname, '../../../config/transaction/.env') });

export const Config = () => {
  return {
    dbUser: process.env.POSTGRES_USER,
    dbPassword: process.env.POSTGRES_PASSWORD,
    dbName: process.env.POSTGRES_DB,
    port: process.env.PORT,
    dbHost: process.env.DB_HOST,
    dbPort: process.env.DB_PORT,
    dbSchema: process.env.DB_SCHEMA,
    rabbitMQUrl: process.env.RABBITMQ_URL,
    rabbitMQQueue: process.env.RABBITMQ_QUEUE,
    Host: process.env.HOST,
    typeOrmConfig: {
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [TransactionEntity],
      synchronize: true,
    } as TypeOrmModuleOptions,
  };
};
