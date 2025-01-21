import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Budget } from './budget.entity';
import { CreateBudgetDTO, PaginationDTO, UpdateBudgetDTO, GetBudgetDTO } from '../dto/dto';

@Injectable()
export class BudgetService {
  constructor(
    @InjectRepository(Budget)
    private budgetRepository: Repository<Budget>,
  ) {}

  getBudgets(limit: PaginationDTO): Promise<GetBudgetDTO[]> {
    const { firstObjectId, lastObjectId } = limit
    if (typeof(firstObjectId) !== 'undefined' && typeof(lastObjectId) !== 'undefined'){

      return this.budgetRepository.find({ skip: (firstObjectId - 1) * lastObjectId, take: lastObjectId });
    }

    return this.budgetRepository.find();
  }

  async createBudget(newBudget: CreateBudgetDTO): Promise<CreateBudgetDTO> {

    const { name, currency } = newBudget
    const month = new Date().toLocaleString('en-US', { month: 'long' });

    const budget = await this.budgetRepository.create({ name, currency, month})

    return this.budgetRepository.save(budget)
  }

  async updateBudget(id: number, updateBudget: UpdateBudgetDTO): Promise<UpdateBudgetDTO> {
    const ifBudgetExist = await this.budgetRepository.findOne({ where: { id } })

    if (ifBudgetExist)
      return this.budgetRepository.save(updateBudget)
    
    return ifBudgetExist
  }

  deleteBudet(id: number): Promise<DeleteResult>{
    return this.budgetRepository.delete(id)
  }
}
