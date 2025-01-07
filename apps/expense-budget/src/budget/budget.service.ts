import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IBudget } from './budget.entity';
import { BudgetDTO } from 'src/dto/dto';

@Injectable()
export class BudgetService {
  constructor(
    @InjectRepository(IBudget)
    private budgetRepository: Repository<IBudget>,
  ) {}

  getBudgets(){
    return this.budgetRepository.find();
  }

  async createBudget(newBudget: BudgetDTO){

    const { name, currency } = newBudget
    const month = new Date().toLocaleString('default', { month: 'long' });

    const budget = await this.budgetRepository.create({ name, currency, month})

    return this.budgetRepository.save(budget)
  }

  async updateBudget(id: number, updateBudget: BudgetDTO){

    const { name, currency } = updateBudget
    await this.budgetRepository.update(id, { name, currency })

    return this.budgetRepository.findOne({where: { id: id }})
  }

  deleteBudet(id: number){
    return this.budgetRepository.delete(id)
  }
}
