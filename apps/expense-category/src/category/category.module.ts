import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ICategory } from './category.entity';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASENAME,
      entities: [ICategory],
      synchronize: true,
  }),
  TypeOrmModule.forFeature([ICategory]),    
  ],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
