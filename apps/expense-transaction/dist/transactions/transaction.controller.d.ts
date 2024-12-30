import { TransactionService } from './transaction.service';
export declare class TransactionController {
    private readonly transactionService;
    constructor(transactionService: TransactionService);
    getTransactions(): Promise<import("./transaction.entity").ITransaction[]>;
    createTransaction(budgetid: number, categoryid: number, type: string, sum: number, activity: string): Promise<import("./transaction.entity").ITransaction>;
    updateTransaction(id: number, budgetid: number, categoryid: number, type: string, sum: number, activity: string): void;
    deleteTransaction(id: number): void;
}
