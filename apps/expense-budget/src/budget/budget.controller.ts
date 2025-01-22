import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { UpdateBudgetDto, CreateBudgetDto, PaginationDto, GetBudgetDto } from '../dto/dto';
import { DeleteResult } from 'typeorm';

@Controller('budget')
export class BudgetController {
  constructor(private readonly budgetService: BudgetService) {}

  @Get()
  getBudgets(@Query() limit: PaginationDto): Promise<GetBudgetDto[]>{
    return this.budgetService.getBudgets(limit);
  }

  @Post()
  async createBudget(@Body() newBudget: CreateBudgetDto): Promise<CreateBudgetDto> {
    const createdBudget = await this.budgetService.createBudget(newBudget)
    return createdBudget
  }

  @Put(':id')
  updateBudget(@Param('id') id: number, @Body() updateBudget: UpdateBudgetDto): Promise<UpdateBudgetDto> {
    return this.budgetService.updateBudget(id, updateBudget)
  }

  @Delete(':id')
  deleteBudget(@Param('id') id: number): Promise<DeleteResult>{
    return this.budgetService.deleteBudet(id)
  }
}
