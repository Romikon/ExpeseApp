import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ICategory } from './category.entity';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'roman1',
    password: '123123',
    database: 'budget',
    entities: [ICategory],
    synchronize: true,
  }),
  TypeOrmModule.forFeature([ICategory]),    
  ],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
