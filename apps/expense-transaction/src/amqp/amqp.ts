import * as amqp from 'amqplib';
import * as dotenv from 'dotenv';
import config from '../config/config'

dotenv.config();

export class CloudAMQP  {
  private connection: amqp.Connection;
  private channel: amqp.Channel;
  private readonly queue = config.rabbitMQQueue;
  private readonly rabbitmqUrl = config.rabbitMQUrl;

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
}