import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TransactionEntity } from './transaction.entity';
import { DeleteResult, Repository } from 'typeorm';
import { PaginationDto, CreateTransactionDto, GetTransactionDto, UpdateTransactionDto } from '../dto/index';
import { CloudAMQP } from '../amqp/amqp';

@Injectable()
export class TransactionService {
  constructor(
    private cloudAMQP: CloudAMQP,
    @InjectRepository(TransactionEntity)
    private transactionReposetory: Repository<TransactionEntity>
  ) {}

  getTransactions(paginationDto: PaginationDto): Promise<GetTransactionDto[]> {
    const { page, size } = paginationDto
    //check if request contain pagination then return with pagination statement
    if (typeof(page) !== 'undefined' && typeof(size) !== 'undefined'){
      
      return this.transactionReposetory.find({ skip: (page - 1) * size, take: size });
    }
    
    return this.transactionReposetory.find();
  }

  async createTransaction(createTransactionDto: CreateTransactionDto): Promise<CreateTransactionDto> {
    const { budgetid, categoryid, type, sum, activity } = createTransactionDto
    await this.cloudAMQP.sendMessage({ type: type, sum: sum, activity: activity })

    return this.transactionReposetory.save(this.transactionReposetory.create({ budgetid, categoryid, type, sum, activity }))
  }

  async updateTransaction(id: number, updateTransactionDto: UpdateTransactionDto): Promise<UpdateTransactionDto> {
    const transactionExist = await this.transactionReposetory.findOne({ where: { id }});
    const { budgetid, categoryid, type, sum, activity } = updateTransactionDto;
    
    if (!transactionExist)
      throw new Error('Transaction didnt exist!');

    transactionExist.budgetid = budgetid;
    transactionExist.categoryid = categoryid;
    transactionExist.type = type;
    transactionExist.sum = sum;
    transactionExist.activity = activity;
    return this.transactionReposetory.save(transactionExist)

  }

  deleteTransaction(id: number): Promise<DeleteResult>{
    return this.transactionReposetory.delete(id)
  }
}
