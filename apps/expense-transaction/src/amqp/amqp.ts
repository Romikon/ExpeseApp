import * as amqp from 'amqplib';
import * as dotenv from 'dotenv';

dotenv.config();

export class CloudAMQP  {
  private connection: amqp.Connection;
  private channel: amqp.Channel;
  private readonly queue = process.env.RABBITMQ_QUEUE;
  private readonly rabbitmqUrl = process.env.RABBITMQ_URL;

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