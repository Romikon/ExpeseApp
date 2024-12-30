import { Repository } from 'typeorm';
import { IBudget, IUpdateBudget } from './budget.entity';
export declare class BudgetService {
    private budgetRepository;
    private budgetUpdateRepository;
    constructor(budgetRepository: Repository<IBudget>, budgetUpdateRepository: Repository<IUpdateBudget>);
    getBudgets(): Promise<IBudget[]>;
    createBudget(name: string, currency: string): Promise<IBudget>;
    updateBudget(id: number, name: string, currency: string): Promise<import("typeorm").UpdateResult>;
    deleteBudet(id: number): void;
}
