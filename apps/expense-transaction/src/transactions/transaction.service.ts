import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ITransaction } from './transaction.entity';
import { Repository } from 'typeorm';
import * as amqp from 'amqplib';

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
    const messageBuffer = Buffer.from(JSON.stringify(message));
    this.channel.sendToQueue(this.queue, messageBuffer);
    console.log(message)
  }

  getTransactions(){
    return this.transactionReposetory.find();
  }

  async createTransaction(budgetid: number, categoryid: number, type: string, sum: number, activity: string){
    const transaction = await this.transactionReposetory.create({ budgetid, categoryid, type, sum, activity })

    await this.sendMessage({ type: type, sum: sum, activity: activity })

    return this.transactionReposetory.save(transaction)
  }

  updateTransaction(id: number, budgetid: number, categoryid: number, type: string, sum: number, activity: string){
    return this.transactionReposetory.update(id, {budgetid, categoryid, type, sum, activity})
  }

  deleteTransaction(id: number){
    this.transactionReposetory.delete(id)
  }
}
