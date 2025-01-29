import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseInterceptors } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { UpdateBudgetDto, CreateBudgetDto, PaginationDto, GetBudgetDto } from '../dto/dto';
import { DeleteResult } from 'typeorm';
import { LoggerInterceptor } from '../logger/logger';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Budget')
@Controller('budget')
@UseInterceptors(LoggerInterceptor)
export class BudgetController {
  constructor(private readonly budgetService: BudgetService) {}

  @Get()
  getBudgets(@Query() paginationDto: PaginationDto): Promise<GetBudgetDto[]>{
    return this.budgetService.getBudgets(paginationDto);
  }

  @Post()
  async createBudget(@Body() createBudgetDto: CreateBudgetDto): Promise<CreateBudgetDto> {
    return this.budgetService.createBudget(createBudgetDto)
  }

  @Put(':id')
  updateBudget(@Param('id') id: number, @Body() updateBudgetDto: UpdateBudgetDto): Promise<UpdateBudgetDto> {
    return this.budgetService.updateBudget(id, updateBudgetDto)
  }

  @Delete(':id')
  deleteBudget(@Param('id') id: number): Promise<DeleteResult>{
    return this.budgetService.deleteBudet(id)
  }
}
