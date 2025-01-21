import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from './transaction.entity';
import { DeleteResult, Repository } from 'typeorm';
import { PaginationDTO, CreateTransactionDTO, GetTransactionDTO, UpdateTransactionDTO } from '../dto/dto';
import { CloudAMQP } from '../amqp/amqp';

@Injectable()
export class TransactionService {
  constructor(
    private cloudAMQP: CloudAMQP,
    @InjectRepository(Transaction)
    private transactionReposetory: Repository<Transaction>
  ) {}

  getTransactions(limit: PaginationDTO): Promise<GetTransactionDTO[]> {
    const { firstObjectId, lastObjectId } = limit
    if (typeof(firstObjectId) !== 'undefined' && typeof(lastObjectId) !== 'undefined'){
      
      return this.transactionReposetory.find({ skip: (firstObjectId - 1) * lastObjectId, take: lastObjectId });
    }
    
    return this.transactionReposetory.find();
  }

  async createTransaction(newTransaction: CreateTransactionDTO): Promise<CreateTransactionDTO> {
    const { budgetid, categoryid, type, sum, activity } = newTransaction
    const transaction = await this.transactionReposetory.create({ budgetid, categoryid, type, sum, activity })
    await this.cloudAMQP.sendMessage({ type: type, sum: sum, activity: activity })

    return this.transactionReposetory.save(transaction)
  }

  async updateTransaction(id: number, updateTransaction: UpdateTransactionDTO): Promise<UpdateTransactionDTO> {
    const ifTransactionExist = await this.transactionReposetory.findOne({ where: { id }})
    
    if (ifTransactionExist)
      return this.transactionReposetory.save(updateTransaction)

    return ifTransactionExist
  }

  deleteTransaction(id: number): Promise<DeleteResult>{
    return this.transactionReposetory.delete(id)
  }
}
