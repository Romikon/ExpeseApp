import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseInterceptors } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto, PaginationDto, UpdateCategoryDto , GetCategoryDto } from '../dto/dto';
import { DeleteResult } from 'typeorm';
import { LoggerInterceptor } from 'src/logger/logger';

@Controller('category')
@UseInterceptors(LoggerInterceptor)
export class CategoryController {
  constructor(private readonly transactionService: CategoryService) {}

  @Get()
  getCategories(@Query() pagination: PaginationDto): Promise<GetCategoryDto[]> {
    return this.transactionService.getCategories(pagination);
  }

  @Post()
  createCategory(@Body() newCategory: CreateCategoryDto): Promise<CreateCategoryDto> {
    return this.transactionService.createCategory(newCategory)
  }

  @Put(':id')
  updateCategory(@Param('id') id: number, @Body() updateCategory: UpdateCategoryDto): Promise<UpdateCategoryDto> {
    return this.transactionService.updateCategory(id, updateCategory)
  }

  @Delete(':id')
  deleteCategory(@Param('id') id: number): Promise<DeleteResult>{
    return this.transactionService.deleteCategory(id)
  }
}
