import { Injectable } from '@nestjs/common';
import { HealthIndicator, HealthIndicatorResult } from '@nestjs/terminus';
import { Config } from '../config/config'
import * as amqp from 'amqplib';

@Injectable()
export class RabbitMQHealthIndicator extends HealthIndicator {
  private connectionUrl: string;

  constructor() {
    super();
    this.connectionUrl = Config().rabbitMQUrl;
  }

  async isHealthy(): Promise<HealthIndicatorResult> {
    try {
      const connection = await amqp.connect(this.connectionUrl);
      await connection.close();
      return this.getStatus('rabbitmq', true);
    } catch (err) {
      return this.getStatus('rabbitmq', false, { message: err.message });
    }
  }
}
