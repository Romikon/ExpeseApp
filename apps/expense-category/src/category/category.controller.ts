import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDTO, PaginationDTO } from '../dto/dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly transactionService: CategoryService) {}

  @Get()
  getCategories(@Query() limit: PaginationDTO): Promise<CategoryDTO[]> {
    return this.transactionService.getCategories(limit);
  }

  @Post()
  createCategory(@Body() newCategory: CategoryDTO): Promise<CategoryDTO> {
    return this.transactionService.createCategory(newCategory)
  }

  @Put(':id')
  updateCategory(@Param('id') id: number, @Body() updateCategory: CategoryDTO): Promise<CategoryDTO> {
    return this.transactionService.updateCategory(id, updateCategory)
  }

  @Delete(':id')
  deleteCategory(@Param('id') id: number){
    return this.transactionService.deleteCategory(id)
  }
}
