import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { Repository } from 'typeorm';
import * as amqp from 'amqplib';
import { CategoryDTO } from '../dto/dto';

@Injectable()
export class CategoryService {
  private connection: amqp.Connection;
  private channel: amqp.Channel;
  private readonly queue = 'writeAddictionalInfo';
  private readonly rabbitmqUrl = 'amqps://wnobioyl:ykNP9ryF9Zyb_EjxntfDy17IcnyLLirN@hawk.rmq.cloudamqp.com/wnobioyl';

  constructor(
    @InjectRepository(Category)
    private categoryReposetory: Repository<Category>
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

      const createdInfo = this.categoryReposetory.create({
        name: data.activity,
        type: data.type,
        description: description
      });

      await this.channel.ack(msg);

      return this.categoryReposetory.save(createdInfo)
    });
  }

  getCategories(): Promise<CategoryDTO[]> {
    return this.categoryReposetory.find();
  }

  createCategory(newCategory: CategoryDTO): Promise<CategoryDTO> {
    const { name, type, description } = newCategory
    const transaction = this.categoryReposetory.create({ name, type, description })

    return this.categoryReposetory.save(transaction)
  }

  async updateCategory(id: number, updateCategory: CategoryDTO): Promise<CategoryDTO> {
    const { name, type, description } = updateCategory
    await this.categoryReposetory.update(id, {name, type, description})

    return this.categoryReposetory.findOne({ where: { id: id }})
  }

  deleteCategory(id: number){
    return this.categoryReposetory.delete(id);
  }
}
