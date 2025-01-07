import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { BudgetDTO } from 'src/dto/dto';

@Controller('budget')
export class BudgetController {
  constructor(private readonly budgetService: BudgetService) {}

  @Get()
  getBudgets(){
    return this.budgetService.getBudgets();
  }

  @Post()
  createBudget(@Body() newBudget: BudgetDTO) {
    return this.budgetService.createBudget(newBudget)
  }

  @Put(':id')
  updateBudget(@Param('id') id: number, @Body() updateBudget: BudgetDTO){
    return this.budgetService.updateBudget(id, updateBudget)
  }

  @Delete(':id')
  deleteBudget(@Param('id') id: number){
    return this.budgetService.deleteBudet(id)
  }
}
