import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { LoggerInterceptor } from '../logger/logger';
import { ApiTags } from '@nestjs/swagger';
import { CreateBalanceDto, UpdateBalanceDto } from '../dto';
import { BalanceService } from './balance.service';

@ApiTags('Balance')
@Controller('balance')
@UseInterceptors(LoggerInterceptor)
export class BalanceController {
  constructor(private readonly balanceService: BalanceService) {}

  @Get()
  getBudgetBalance(){
    return this.balanceService.getBalance();
  }

  @Post()
  async createBudget(
    @Body() createBalanceDto: CreateBalanceDto,
  ): Promise<CreateBalanceDto> {
    return this.balanceService.createBalance(createBalanceDto);
  }

  @Put(':id')
  updateBudget(
    @Param('id') id: number,
    @Body() updateBalanceDto: UpdateBalanceDto,
  ): Promise<UpdateBalanceDto> {
    return this.balanceService.updateBalance(id, updateBalanceDto);
  }

  @Delete(':id')
  deleteBudget(@Param('id') id: number): Promise<DeleteResult> {
    return this.balanceService.deleteBalance(id);
  }
}
