import { BudgetService } from './budget.service';
export declare class AppController {
    private readonly budgetService;
    constructor(budgetService: BudgetService);
    getBudgets(): Promise<import("./budget.entity").IBudget[]>;
    createBudget(budgetName: string, budgetCurrency: string): Promise<import("./budget.entity").IBudget>;
    updateBudget(id: number, name: string, currency: string): void;
    deleteBudget(id: number): void;
}
