import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { PaginationDTO, TransactionDTO } from '../dto/dto';

@Controller('transactions')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get()
  getTransactions(@Query() limit: PaginationDTO): Promise<TransactionDTO[]> {
    return this.transactionService.getTransactions(limit);
  }

  @Post()
  createTransaction(@Body() newTransaction: TransactionDTO): Promise<TransactionDTO> {
    return this.transactionService.createTransaction(newTransaction)
  }

  @Put(':id')
  updateTransaction(@Param('id') id: number, @Body() updateTransaction: TransactionDTO): Promise<TransactionDTO>{
    return this.transactionService.updateTransaction(id, updateTransaction)
  }

  @Delete(':id')
  deleteTransaction(@Param('id') id: number){
    return this.transactionService.deleteTransaction(id)
  }
}
