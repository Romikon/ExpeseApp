import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDTO } from 'src/dto/dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly transactionService: CategoryService) {}

  @Get()
  getCategories(){
    return this.transactionService.getCategories();
  }

  @Post()
  createCategory(@Body() newCategory: CategoryDTO) {
    return this.transactionService.createCategory(newCategory)
  }

  @Put(':id')
  updateCategory(@Param('id') id: number, @Body() updateCategory: CategoryDTO){
    return this.transactionService.updateCategory(id, updateCategory)
  }

  @Delete(':id')
  deleteCategory(@Param('id') id: number){
    return this.transactionService.deleteCategory(id)
  }
}
