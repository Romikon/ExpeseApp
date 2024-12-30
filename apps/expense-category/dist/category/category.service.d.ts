import { ICategory } from './category.entity';
import { Repository } from 'typeorm';
export declare class CategoryService {
    private transactionReposetory;
    private connection;
    private channel;
    private readonly queue;
    private readonly rabbitmqUrl;
    constructor(transactionReposetory: Repository<ICategory>);
    onModuleInit(): Promise<void>;
    getCategories(): Promise<ICategory[]>;
    createCategory(name: string, type: string, description: string): Promise<ICategory>;
    updateCategory(id: number, name: string, type: string, description: string): Promise<import("typeorm").UpdateResult>;
    deleteCategory(id: number): void;
}
