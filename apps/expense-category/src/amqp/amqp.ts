import * as amqp from 'amqplib';
import { CategoryService } from '../category/category.service';
import { Config } from '../config/config'
import { CategoryFromRabbitMQDto } from '../dto/index';
import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class CloudAMQP implements OnModuleInit{
    private connection: amqp.Connection;
    private channel: amqp.Channel;
    private readonly queue = Config().rabbitMQQueue;
    private readonly rabbitmqUrl = Config().rabbitMQUrl;

    constructor(
        private categoryService: CategoryService
    ){}

    async onModuleInit() {
        this.connection = await amqp.connect(this.rabbitmqUrl);
        this.channel = await this.connection.createChannel();
        await this.channel.assertQueue(this.queue);
    
        this.channel.consume(this.queue, async (msg) => {
          const data: CategoryFromRabbitMQDto = JSON.parse(msg.content.toString());
          console.log("Data: ", data);
          console.log(typeof(data));
          
          const newCategory = await this.categoryService.createCategoryFromRabbitMQ(data);

          this.channel.ack(msg);

          return newCategory
        });
      }
}