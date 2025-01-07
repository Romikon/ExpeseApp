import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionService } from './transaction.service';
import { ITransaction } from './transaction.entity';
import { TransactionController } from './transaction.controller';
import * as dotenv from 'dotenv';
import { CloudAMQP } from 'src/amqp/amqp';
import { typeOrmConfig } from 'src/config/config';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
  TypeOrmModule.forFeature([ITransaction]),
  ],
  controllers: [TransactionController],
  providers: [TransactionService, CloudAMQP],
})
export class TransactionModule {}
