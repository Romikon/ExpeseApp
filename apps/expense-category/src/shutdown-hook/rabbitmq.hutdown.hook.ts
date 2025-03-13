import { Injectable, OnApplicationShutdown } from '@nestjs/common';
import { ClientProxy, Client, Transport } from '@nestjs/microservices';
import { Config } from '../config/config';

@Injectable()
export class RabbitMQService implements OnApplicationShutdown {
  @Client({
    transport: Transport.RMQ,
    options: {
      urls: [Config().rabbitMQUrl],
      queue: Config().rabbitMQQueue,
    },
  })
  private client: ClientProxy;

  async onApplicationShutdown() {
    console.log(
      '[Shutdown]: Shutting down RabbitMQ connection in Category service',
    );
    await this.client.close();
    console.log('[Shutdown]: RabbitMQ connection closed in Category service');
  }
}
