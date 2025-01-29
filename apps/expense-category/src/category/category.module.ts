import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from './category.entity';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { CloudAMQP } from '../amqp/amqp';
import { Config } from '../config/config';

@Module({
  imports: [
    TypeOrmModule.forRoot(Config().typeOrmConfig),
    TypeOrmModule.forFeature([CategoryEntity]),    
  ],
  controllers: [CategoryController],
  providers: [CategoryService, CloudAMQP],
})
export class CategoryModule {}
