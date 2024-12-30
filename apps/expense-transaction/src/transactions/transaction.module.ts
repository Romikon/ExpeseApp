import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionService } from './transaction.service';
import { ITransaction } from './transaction.entity';
import { TransactionController } from './transaction.controller';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'roman1',
    password: '123123',
    database: 'budget',
    entities: [ITransaction],
    synchronize: true,
  }),
  TypeOrmModule.forFeature([ITransaction]),
  ],
  controllers: [TransactionController],
  providers: [TransactionService],
})
export class TransactionModule {}
