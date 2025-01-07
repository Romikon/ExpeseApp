import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly transactionService: CategoryService) {}

  @Get()
  getCategories(){
    return this.transactionService.getCategories();
  }

  @Post()
  createCategory(@Body('name') name: string, @Body('type') type: string, @Body('description') description: string) {
    return this.transactionService.createCategory(name, type, description)
  }

  @Put(':id')
  updateCategory(@Param('id') id: number, @Body('name') name: string, @Body('type') type: string, @Body('description') description: string){
    return this.transactionService.updateCategory(id, name, type, description)
  }

  @Delete(':id')
  deleteCategory(@Param('id') id: number){
    return this.transactionService.deleteCategory(id)
  }
}
