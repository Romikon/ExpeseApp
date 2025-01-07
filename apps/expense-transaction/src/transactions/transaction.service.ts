import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ITransaction } from './transaction.entity';
import { Repository } from 'typeorm';
import * as amqp from 'amqplib';
import { TransactionDTO } from 'src/dto/dto';

@Injectable()
export class TransactionService {
  private connection: amqp.Connection;
  private channel: amqp.Channel;
  private readonly queue = 'writeAddictionalInfo';
  private readonly rabbitmqUrl = 'amqps://wnobioyl:ykNP9ryF9Zyb_EjxntfDy17IcnyLLirN@hawk.rmq.cloudamqp.com/wnobioyl';
  constructor(
    @InjectRepository(ITransaction)
    private transactionReposetory: Repository<ITransaction>
  ) {}

  async connect() {
    this.connection = await amqp.connect(this.rabbitmqUrl);
    this.channel = await this.connection.createChannel();
    await this.channel.assertQueue(this.queue);
  }

  async sendMessage(message: any) {
    await this.connect()
    const messageBuffer = Buffer.from(JSON.stringify(message));
    this.channel.sendToQueue(this.queue, messageBuffer);
  }

  getTransactions(){
    return this.transactionReposetory.find();
  }

  async createTransaction(newTransaction: TransactionDTO){
    const { budgetid, categoryid, type, sum, activity } = newTransaction
    const transaction = await this.transactionReposetory.create({ budgetid, categoryid, type, sum, activity })

    await this.sendMessage({ type: type, sum: sum, activity: activity })

    return this.transactionReposetory.save(transaction)
  }

  async updateTransaction(id: number, updateTransaction: TransactionDTO){
    const {budgetid, categoryid, type, sum, activity} = updateTransaction
    await this.transactionReposetory.update(id, { budgetid, categoryid, type, sum, activity })

    return this.transactionReposetory.findOne({ where: { id: id }})
  }

  deleteTransaction(id: number){
    return this.transactionReposetory.delete(id)
  }
}
