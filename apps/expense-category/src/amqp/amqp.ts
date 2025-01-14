import * as amqp from 'amqplib';
import { CategoryService } from '../category/category.service';
import { CategoryDTO } from '../dto/dto';
import config from '../config/config'

export class CloudAMQP{
    private connection: amqp.Connection;
    private channel: amqp.Channel;
    private readonly queue = config.rabbitMQQueue;
    private readonly rabbitmqUrl = config.rabbitMQUrl;

    constructor(
        private categoryService: CategoryService
    ){}

    async onModuleInit() {
        this.connection = await amqp.connect(this.rabbitmqUrl);
        this.channel = await this.connection.createChannel();
        await this.channel.assertQueue(this.queue);
    
        this.channel.consume(this.queue, async (msg) => {
          const data = JSON.parse(msg.content.toString());
          
          const newCategory = await this.categoryService.createCategoryFromRabbitMQ(data)

          await this.channel.ack(msg);

          return newCategory
        });
      }
}