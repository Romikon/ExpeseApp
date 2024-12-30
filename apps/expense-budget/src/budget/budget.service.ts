import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IBudget, IUpdateBudget } from './budget.entity';

@Injectable()
export class BudgetService {
  constructor(
    @InjectRepository(IBudget)
    private budgetRepository: Repository<IBudget>,
    @InjectRepository(IUpdateBudget)
    private budgetUpdateRepository: Repository<IUpdateBudget>
  ) {}

  getBudgets(){
    return this.budgetRepository.find();
  }

  createBudget(name: string, currency: string){

    const month = new Date().toLocaleString('default', { month: 'long' });

    const budget = this.budgetRepository.create({name, currency, month})

    return this.budgetRepository.save(budget)
  }

  updateBudget(id: number, name: string, currency: string){
    return this.budgetUpdateRepository.update(id, {name, currency})
  }

  deleteBudet(id: number){
    this.budgetRepository.delete(id)
  }
}
