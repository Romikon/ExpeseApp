import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IBudget } from './budget.entity';

@Injectable()
export class BudgetService {
  constructor(
    @InjectRepository(IBudget)
    private budgetRepository: Repository<IBudget>,
  ) {}

  getBudgets(){
    return this.budgetRepository.find();
  }

  createBudget(name: string, currency: string){

    const month = new Date().toLocaleString('default', { month: 'long' });

    const budget = this.budgetRepository.create({name, currency, month})

    return this.budgetRepository.save(budget)
  }

  async updateBudget(id: number, name: string, currency: string){
    await this.budgetRepository.update(id, {name, currency})

    return this.budgetRepository.findOne({where: { id: id }})
  }

  deleteBudet(id: number){
    return this.budgetRepository.delete(id)
  }
}
