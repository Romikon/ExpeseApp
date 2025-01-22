import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TransactionEntity } from './transaction.entity';
import { DeleteResult, Repository } from 'typeorm';
import { PaginationDto, CreateTransactionDto, GetTransactionDto, UpdateTransactionDto } from '../dto/dto';
import { CloudAMQP } from '../amqp/amqp';

@Injectable()
export class TransactionService {
  constructor(
    private cloudAMQP: CloudAMQP,
    @InjectRepository(TransactionEntity)
    private transactionReposetory: Repository<TransactionEntity>
  ) {}

  getTransactions(limit: PaginationDto): Promise<GetTransactionDto[]> {
    const { firstObjectId, lastObjectId } = limit
    if (typeof(firstObjectId) !== 'undefined' && typeof(lastObjectId) !== 'undefined'){
      
      return this.transactionReposetory.find({ skip: (firstObjectId - 1) * lastObjectId, take: lastObjectId });
    }
    
    return this.transactionReposetory.find();
  }

  async createTransaction(newTransaction: CreateTransactionDto): Promise<CreateTransactionDto> {
    const { budgetid, categoryid, type, sum, activity } = newTransaction
    const transaction = await this.transactionReposetory.create({ budgetid, categoryid, type, sum, activity })
    await this.cloudAMQP.sendMessage({ type: type, sum: sum, activity: activity })

    return this.transactionReposetory.save(transaction)
  }

  async updateTransaction(id: number, updateTransaction: UpdateTransactionDto): Promise<UpdateTransactionDto> {
    const ifTransactionExist = await this.transactionReposetory.findOne({ where: { id }})
    
    if (ifTransactionExist)
      return this.transactionReposetory.save(updateTransaction)

    return ifTransactionExist
  }

  deleteTransaction(id: number): Promise<DeleteResult>{
    return this.transactionReposetory.delete(id)
  }
}
