import { ITransaction } from './transaction.entity';
import { Repository } from 'typeorm';
export declare class TransactionService {
    private transactionReposetory;
    private connection;
    private channel;
    private readonly queue;
    private readonly rabbitmqUrl;
    constructor(transactionReposetory: Repository<ITransaction>);
    connect(): Promise<void>;
    sendMessage(message: any): Promise<void>;
    getTransactions(): Promise<ITransaction[]>;
    createTransaction(budgetid: number, categoryid: number, type: string, sum: number, activity: string): Promise<ITransaction>;
    updateTransaction(id: number, budgetid: number, categoryid: number, type: string, sum: number, activity: string): Promise<import("typeorm").UpdateResult>;
    deleteTransaction(id: number): void;
}
