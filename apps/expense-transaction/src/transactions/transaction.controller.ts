import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TransactionService } from './transaction.service';

@Controller('transactions')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get()
  getTransactions(){
    return this.transactionService.getTransactions();
  }

  @Post()
  createTransaction(@Body('budgetid') budgetid: number, @Body('categoryid') categoryid: number, @Body('type') type: string, @Body('sum') sum: number, @Body('activity') activity: string) {
    return this.transactionService.createTransaction(budgetid, categoryid, type, sum, activity)
  }

  @Put(':id')
  updateTransaction(@Param('id') id: number, @Body('budgetid') budgetid: number, @Body('categoryid') categoryid: number, @Body('type') type: string, @Body('sum') sum: number, @Body('activity') activity: string){
    return this.transactionService.updateTransaction(id, categoryid, budgetid, type, sum, activity)
  }

  @Delete(':id')
  deleteTransaction(@Param('id') id: number){
    return this.transactionService.deleteTransaction(id)
  }
}
