import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ICategory } from './category.entity';
import { Repository } from 'typeorm';
import * as amqp from 'amqplib';

@Injectable()
export class CategoryService {
  private connection: amqp.Connection;
  private channel: amqp.Channel;
  private readonly queue = 'writeAddictionalInfo';
  private readonly rabbitmqUrl = 'amqps://wnobioyl:ykNP9ryF9Zyb_EjxntfDy17IcnyLLirN@hawk.rmq.cloudamqp.com/wnobioyl';

  constructor(
    @InjectRepository(ICategory)
    private transactionReposetory: Repository<ICategory>
  ) {}

  async onModuleInit() {
    this.connection = await amqp.connect(this.rabbitmqUrl);
    this.channel = await this.connection.createChannel();
    await this.channel.assertQueue(this.queue);

    this.channel.consume(this.queue, async (msg) => {
      const data = JSON.parse(msg.content.toString());
      
      let description

      if(data.type == 'income'){
        description = `income was received in the amount ${data.sum} of ${data.activity} category`
      }
      else{
        description = `expenses in the amount of ${data.sum} of ${data.activity} category`
      }

      const createdInfo = this.transactionReposetory.create({
        name: data.activity,
        type: data.type,
        description: description
      });

      this.channel.ack(msg);

      return this.transactionReposetory.save(createdInfo)
    });
  }

  getCategories(){
    return this.transactionReposetory.find();
  }

  createCategory(name: string, type: string, description: string){
    const transaction = this.transactionReposetory.create({name, type, description})

    return this.transactionReposetory.save(transaction)
  }

  updateCategory(id: number, name: string, type: string, description: string){
    return this.transactionReposetory.update(id, {name, type, description})
  }

  deleteCategory(id: number){
    this.transactionReposetory.delete(id)
  }
}
