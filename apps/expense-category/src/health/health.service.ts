import { Injectable } from '@nestjs/common';
import {
  HealthCheckService,
  MemoryHealthIndicator,
  TypeOrmHealthIndicator,
} from '@nestjs/terminus';
import { RabbitMQHealthIndicator } from './rabbitmq.health';

@Injectable()
export class HealthService {
  constructor(
    private readonly health: HealthCheckService,
    private readonly memory: MemoryHealthIndicator,
    private readonly rabbitMQ: RabbitMQHealthIndicator,
    private readonly db: TypeOrmHealthIndicator,
  ) {}

  check() {
    return this.health.check([
      () => this.memory.checkHeap('memory_heap', 1024 * 1024 * 1024),
      () => this.db.pingCheck('postgres'),
      () => this.rabbitMQ.isHealthy(),
    ]);
  }
}
