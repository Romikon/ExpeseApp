import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from './transaction.entity';
import { Repository } from 'typeorm';
import { TransactionDTO } from '../dto/dto';
import { CloudAMQP } from '../amqp/amqp';

@Injectable()
export class TransactionService {
  constructor(
    private cloudAMQP: CloudAMQP,
    @InjectRepository(Transaction)
    private transactionReposetory: Repository<Transaction>
  ) {}

  getTransactions(): Promise<TransactionDTO[]> {
    return this.transactionReposetory.find();
  }

  async createTransaction(newTransaction: TransactionDTO): Promise<TransactionDTO> {
    const { budgetid, categoryid, type, sum, activity } = newTransaction
    const transaction = await this.transactionReposetory.create({ budgetid, categoryid, type, sum, activity })
    await this.cloudAMQP.sendMessage({ type: type, sum: sum, activity: activity })

    return this.transactionReposetory.save(transaction)
  }

  async updateTransaction(id: number, updateTransaction: TransactionDTO): Promise<TransactionDTO> {
    const {budgetid, categoryid, type, sum, activity} = updateTransaction
    await this.transactionReposetory.update(id, { budgetid, categoryid, type, sum, activity })

    return this.transactionReposetory.findOne({ where: { id: id }})
  }

  deleteTransaction(id: number){
    return this.transactionReposetory.delete(id)
  }
}
