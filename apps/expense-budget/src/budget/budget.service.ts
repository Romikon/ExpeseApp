import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { BudgetEntity } from './budget.entity';
import { CreateBudgetDto, PaginationDto, UpdateBudgetDto, GetBudgetDto } from '../dto/dto';

@Injectable()
export class BudgetService {
  constructor(
    @InjectRepository(BudgetEntity)
    private budgetRepository: Repository<BudgetEntity>,
  ) {}

  getBudgets(paginationDto: PaginationDto): Promise<GetBudgetDto[]> {
    const { page, size } = paginationDto
    if (typeof(page) !== 'undefined' && typeof(size) !== 'undefined'){

      return this.budgetRepository.find({ skip: (page - 1) * size, take: size });
    }

    return this.budgetRepository.find();
  }

  async createBudget(createBudgetDto: CreateBudgetDto): Promise<CreateBudgetDto> {

    const { name, currency } = createBudgetDto
    const month = new Date().toLocaleString('en-US', { month: 'long' });

    const budget = this.budgetRepository.create({ name, currency, month})

    return this.budgetRepository.save(budget)
  }

  async updateBudget(id: number, updateBudgetDto: UpdateBudgetDto): Promise<UpdateBudgetDto> {
    const budgetExist = await this.budgetRepository.findOne({ where: { id } });
    const { name, currency } = updateBudgetDto;

    if (!budgetExist)
      throw new Error('Budget didnt exist!');
      
    budgetExist.name = name;
    budgetExist.currency = currency
    return this.budgetRepository.save(budgetExist)
    
  }

  deleteBudet(id: number): Promise<DeleteResult>{
    return this.budgetRepository.delete(id)
  }
}
