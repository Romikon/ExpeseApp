import { Module } from '@nestjs/common';
import { TransactionModule } from './transactions/transaction.module';
import { HealthModule } from './health';
import { DatabaseService } from './shutdown-hook/database.shutdown.hook';
import { RabbitMQService } from './shutdown-hook/rabbitmq.shutdown.hook';
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [
    TransactionModule,
    HealthModule,
    LoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: 'pino-pretty',
          options: {
            singleLine: true,
          },
        },
      },
    })
  ],
  controllers: [],
  providers: [DatabaseService, RabbitMQService],
})
export class AppModule {}
