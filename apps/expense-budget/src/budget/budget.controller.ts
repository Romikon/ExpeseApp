import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { UpdateBudgetDTO, CreateBudgetDTO, PaginationDTO, GetBudgetDTO } from '../dto/dto';
import { DeleteResult } from 'typeorm';

@Controller('budget')
export class BudgetController {
  constructor(private readonly budgetService: BudgetService) {}

  @Get()
  getBudgets(@Query() limit: PaginationDTO): Promise<GetBudgetDTO[]>{
    return this.budgetService.getBudgets(limit);
  }

  @Post()
  async createBudget(@Body() newBudget: CreateBudgetDTO): Promise<CreateBudgetDTO> {
    const createdBudget = await this.budgetService.createBudget(newBudget)
    return createdBudget
  }

  @Put(':id')
  updateBudget(@Param('id') id: number, @Body() updateBudget: UpdateBudgetDTO): Promise<UpdateBudgetDTO> {
    return this.budgetService.updateBudget(id, updateBudget)
  }

  @Delete(':id')
  deleteBudget(@Param('id') id: number): Promise<DeleteResult>{
    return this.budgetService.deleteBudet(id)
  }
}
