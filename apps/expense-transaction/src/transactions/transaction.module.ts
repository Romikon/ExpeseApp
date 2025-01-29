import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionService } from './transaction.service';
import { TransactionEntity } from './transaction.entity';
import { TransactionController } from './transaction.controller';
import { CloudAMQP } from '../amqp/amqp';
import { Config } from '../config/config';

@Module({
  imports: [
    TypeOrmModule.forRoot(Config().typeOrmConfig),
  TypeOrmModule.forFeature([TransactionEntity]),
  ],
  controllers: [TransactionController],
  providers: [TransactionService, CloudAMQP],
})
export class TransactionModule {}
