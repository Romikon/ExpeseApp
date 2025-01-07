import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ICategory } from './category.entity';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import * as dotenv from 'dotenv';
import { CloudAMQP } from 'src/amqp/amqp';
import { typeOrmConfig } from 'src/config/config';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
  TypeOrmModule.forFeature([ICategory]),    
  ],
  controllers: [CategoryController],
  providers: [CategoryService, CloudAMQP],
})
export class CategoryModule {}
