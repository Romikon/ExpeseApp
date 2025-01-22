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

  getBudgets(pagination: PaginationDto): Promise<GetBudgetDto[]> {
    const { page, size } = pagination
    if (typeof(page) !== 'undefined' && typeof(size) !== 'undefined'){

      return this.budgetRepository.find({ skip: (page - 1) * size, take: size });
    }

    return this.budgetRepository.find();
  }

  async createBudget(newBudget: CreateBudgetDto): Promise<CreateBudgetDto> {

    const { name, currency } = newBudget
    const month = new Date().toLocaleString('en-US', { month: 'long' });

    const budget = await this.budgetRepository.create({ name, currency, month})

    return this.budgetRepository.save(budget)
  }

  async updateBudget(id: number, updateBudget: UpdateBudgetDto): Promise<UpdateBudgetDto> {
    const ifBudgetExist = await this.budgetRepository.findOne({ where: { id } })

    if (ifBudgetExist)
      return this.budgetRepository.save(updateBudget)
    
    return ifBudgetExist
  }

  deleteBudet(id: number): Promise<DeleteResult>{
    return this.budgetRepository.delete(id)
  }
}
