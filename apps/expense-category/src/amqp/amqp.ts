import { Injectable } from '@nestjs/common';
import * as amqp from 'amqplib';
import { CategoryService } from 'src/category/category.service';
import { CategoryDTO } from 'src/dto/dto';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class CloudAMQP{
    private connection: amqp.Connection;
    private channel: amqp.Channel;
    private readonly queue = process.env.RABBITMQ_QUEUE;
    private readonly rabbitmqUrl = process.env.RABBITMQ_URL;

    constructor(
        private categoryService: CategoryService
    ){}

    async onModuleInit() {
        this.connection = await amqp.connect(this.rabbitmqUrl);
        this.channel = await this.connection.createChannel();
        await this.channel.assertQueue(this.queue);
    
        this.channel.consume(this.queue, async (msg) => {
          const data = JSON.parse(msg.content.toString());
          let description
    
          if (data.type === 'income') {
            description = `An income of ${data.sum} has been received under the ${data.activity} category.`;
          } else {
            description = `An expense of ${data.sum} has been recorded under the ${data.activity} category.`;
          }
          
          const newCategory: CategoryDTO = { name: data.activity, type: data.type, description: description };

          this.channel.ack(msg);

          return this.categoryService.createCategory(newCategory);
        });
      }
}