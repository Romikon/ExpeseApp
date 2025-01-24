import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { HealthModule } from './health';
import { DatabaseService } from './shutdown-hook/database.hutdown.hook';
import { RabbitMQService } from './shutdown-hook/rabbitmq.hutdown.hook';
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [
    CategoryModule,
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
