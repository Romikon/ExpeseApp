import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDTO, PaginationDTO, UpdateCategoryDTO , GetCategoryDTO } from '../dto/dto';
import { DeleteResult } from 'typeorm';

@Controller('category')
export class CategoryController {
  constructor(private readonly transactionService: CategoryService) {}

  @Get()
  getCategories(@Query() limit: PaginationDTO): Promise<GetCategoryDTO[]> {
    return this.transactionService.getCategories(limit);
  }

  @Post()
  createCategory(@Body() newCategory: CreateCategoryDTO): Promise<CreateCategoryDTO> {
    return this.transactionService.createCategory(newCategory)
  }

  @Put(':id')
  updateCategory(@Param('id') id: number, @Body() updateCategory: UpdateCategoryDTO): Promise<UpdateCategoryDTO> {
    return this.transactionService.updateCategory(id, updateCategory)
  }

  @Delete(':id')
  deleteCategory(@Param('id') id: number): Promise<DeleteResult>{
    return this.transactionService.deleteCategory(id)
  }
}
