import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Budget } from './budget.entity';
import { BudgetDTO, PaginationDTO } from '../dto/dto';

@Injectable()
export class BudgetService {
  constructor(
    @InjectRepository(Budget)
    private budgetRepository: Repository<Budget>,
  ) {}

  getBudgets(limit: PaginationDTO): Promise<BudgetDTO[]> {
    const { firstObjectId, lastObjectId } = limit
    if (typeof(firstObjectId) !== 'undefined' && typeof(lastObjectId) !== 'undefined'){

      return this.budgetRepository.find({ skip: (firstObjectId - 1) * lastObjectId, take: lastObjectId });
    }

    return this.budgetRepository.find();
  }

  async createBudget(newBudget: BudgetDTO): Promise<BudgetDTO> {

    const { name, currency } = newBudget
    const month = new Date().toLocaleString('en-US', { month: 'long' });

    const budget = await this.budgetRepository.create({ name, currency, month})

    return this.budgetRepository.save(budget)
  }

  async updateBudget(id: number, updateBudget: BudgetDTO): Promise<BudgetDTO> {

    const { name, currency } = updateBudget
    await this.budgetRepository.update(id, { name, currency })

    return this.budgetRepository.findOne({where: { id: id }})
  }

  deleteBudet(id: number){
    return this.budgetRepository.delete(id)
  }
}
