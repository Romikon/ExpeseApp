import { Module } from '@nestjs/common';
import { TransactionModule } from './transactions/transaction.module';
import { HealthModule } from './health';
import { DatabaseService } from './shutdown-hook/database.shutdown.hook';
import { RabbitMQService } from './shutdown-hook/rabbitmq.shutdown.hook';

@Module({
  imports: [
    TransactionModule,
    HealthModule
  ],
  controllers: [],
  providers: [DatabaseService, RabbitMQService],
})
export class AppModule {}
