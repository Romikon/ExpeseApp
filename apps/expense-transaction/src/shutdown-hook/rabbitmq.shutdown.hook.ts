import { Injectable, OnApplicationShutdown } from '@nestjs/common';
import { ClientProxy, Client, Transport } from '@nestjs/microservices';
import config from '../config/config';

@Injectable()
export class RabbitMQService implements OnApplicationShutdown {
  @Client({
    transport: Transport.RMQ,
    options: {
      urls: [config.rabbitMQUrl],
      queue: config.rabbitMQQueue,
    },
  })
  private client: ClientProxy;

  async onApplicationShutdown() {
    console.log('[Shutdown]: Shutting down RabbitMQ connection in Transaction service');
    await this.client.close();
    console.log('[Shutdown]: RabbitMQ connection closed in Transaction service');
  }
}
