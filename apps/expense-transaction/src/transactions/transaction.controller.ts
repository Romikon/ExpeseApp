import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { TransactionService } from './transaction.service';
import {
  PaginationDto,
  CreateTransactionDto,
  GetTransactionDto,
  UpdateTransactionDto,
} from '../dto/index';
import { DeleteResult } from 'typeorm';
import { LoggerInterceptor } from '../logger/logger';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Transaction')
@Controller('transactions')
@UseInterceptors(LoggerInterceptor)
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get()
  getTransactions(
    @Query() paginationDto: PaginationDto,
  ): Promise<GetTransactionDto[]> {
    return this.transactionService.getTransactions(paginationDto);
  }

  @Post()
  createTransaction(
    @Body() createTransactionDto: CreateTransactionDto,
  ): Promise<CreateTransactionDto> {
    return this.transactionService.createTransaction(createTransactionDto);
  }

  @Put(':id')
  updateTransaction(
    @Param('id') id: number,
    @Body() updateTransactionDto: UpdateTransactionDto,
  ): Promise<UpdateTransactionDto> {
    return this.transactionService.updateTransaction(id, updateTransactionDto);
  }

  @Delete(':id')
  deleteTransaction(@Param('id') id: number): Promise<DeleteResult> {
    return this.transactionService.deleteTransaction(id);
  }
}
