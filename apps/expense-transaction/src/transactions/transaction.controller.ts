import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { PaginationDTO, CreateTransactionDTO, GetTransactionDTO, UpdateTransactionDTO } from '../dto/dto';
import { DeleteResult } from 'typeorm';

@Controller('transactions')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get()
  getTransactions(@Query() limit: PaginationDTO): Promise<GetTransactionDTO[]> {
    return this.transactionService.getTransactions(limit);
  }

  @Post()
  createTransaction(@Body() newTransaction: CreateTransactionDTO): Promise<CreateTransactionDTO> {
    return this.transactionService.createTransaction(newTransaction)
  }

  @Put(':id')
  updateTransaction(@Param('id') id: number, @Body() updateTransaction: UpdateTransactionDTO): Promise<UpdateTransactionDTO>{
    return this.transactionService.updateTransaction(id, updateTransaction)
  }

  @Delete(':id')
  deleteTransaction(@Param('id') id: number): Promise<DeleteResult>{
    return this.transactionService.deleteTransaction(id)
  }
}
