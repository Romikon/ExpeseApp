import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BudgetService } from './budget.service';

@Controller('budget')
export class AppController {
  constructor(private readonly budgetService: BudgetService) {}

  @Get()
  getBudgets(){
    return this.budgetService.getBudgets();
  }

  @Post()
  createBudget(@Body('name') budgetName: string, @Body('currency') budgetCurrency: string) {
    return this.budgetService.createBudget(budgetName, budgetCurrency)
  }

  @Put(':id')
  updateBudget(@Param('id') id: number, @Body('name') name: string, @Body('currency') currency: string){
    this.budgetService.updateBudget(id, name, currency)
  }

  @Delete(':id')
  deleteBudget(@Param('id') id: number){
    this.budgetService.deleteBudet(id)
  }
}
