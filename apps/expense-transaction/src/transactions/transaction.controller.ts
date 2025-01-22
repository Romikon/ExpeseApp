import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { PaginationDto, CreateTransactionDto, GetTransactionDto, UpdateTransactionDto } from '../dto/dto';
import { DeleteResult } from 'typeorm';

@Controller('transactions')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get()
  getTransactions(@Query() limit: PaginationDto): Promise<GetTransactionDto[]> {
    return this.transactionService.getTransactions(limit);
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
