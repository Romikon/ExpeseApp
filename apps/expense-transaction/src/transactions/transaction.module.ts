import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionService } from './transaction.service';
import { Transaction } from './transaction.entity';
import { TransactionController } from './transaction.controller';
import { CloudAMQP } from '../amqp/amqp';
import { typeOrmConfig } from '../config/config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
  TypeOrmModule.forFeature([Transaction]),
  ],
  controllers: [TransactionController],
  providers: [TransactionService, CloudAMQP],
})
export class TransactionModule {}
