import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TerminusModule } from '@nestjs/terminus';
import { HealthController } from './health.controller';
import { HealthService } from './health.service';
import { Config } from '../config/config';
import { RabbitMQHealthIndicator } from './rabbitmq.health';

@Module({
  imports: [
    TerminusModule,
    TypeOrmModule.forRoot(Config().typeOrmConfig),
  ],
  controllers: [HealthController],
  providers: [HealthService, RabbitMQHealthIndicator],
})
export class HealthModule {}
