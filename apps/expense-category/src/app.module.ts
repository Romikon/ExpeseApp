import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { HealthModule } from './health';
import { DatabaseService } from './shutdown-hook/database.hutdown.hook';
import { RabbitMQService } from './shutdown-hook/rabbitmq.hutdown.hook';

@Module({
  imports: [
    CategoryModule,
    HealthModule
  ],
  controllers: [],
  providers: [DatabaseService, RabbitMQService],
})
export class AppModule {}
