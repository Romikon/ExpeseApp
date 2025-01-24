import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseInterceptors } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { PaginationDto, CreateTransactionDto, GetTransactionDto, UpdateTransactionDto } from '../dto/dto';
import { DeleteResult } from 'typeorm';
import { LoggerInterceptor } from '../logger/logger';

@Controller('transactions')
@UseInterceptors(LoggerInterceptor)
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get()
  getTransactions(@Query() pagination: PaginationDto): Promise<GetTransactionDto[]> {
    return this.transactionService.getTransactions(pagination);
  }

  @Post()
  createTransaction(@Body() newTransaction: CreateTransactionDto): Promise<CreateTransactionDto> {
    return this.transactionService.createTransaction(newTransaction)
  }

  @Put(':id')
  updateTransaction(@Param('id') id: number, @Body() updateTransaction: UpdateTransactionDto): Promise<UpdateTransactionDto>{
    return this.transactionService.updateTransaction(id, updateTransaction)
  }

  @Delete(':id')
  deleteTransaction(@Param('id') id: number): Promise<DeleteResult>{
    return this.transactionService.deleteTransaction(id)
  }
}
