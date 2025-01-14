import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { BudgetDTO, PaginationDTO } from '../dto/dto';

@Controller('budget')
export class BudgetController {
  constructor(private readonly budgetService: BudgetService) {}

  @Get()
  getBudgets(@Query() limit: PaginationDTO): Promise<BudgetDTO[]>{
    return this.budgetService.getBudgets(limit);
  }

  @Post()
  async createBudget(@Body() newBudget: BudgetDTO): Promise<BudgetDTO> {
    const createdBudget = await this.budgetService.createBudget(newBudget)
    return createdBudget
  }

  @Put(':id')
  updateBudget(@Param('id') id: number, @Body() updateBudget: BudgetDTO): Promise<BudgetDTO> {
    return this.budgetService.updateBudget(id, updateBudget)
  }

  @Delete(':id')
  deleteBudget(@Param('id') id: number){
    return this.budgetService.deleteBudet(id)
  }
}
