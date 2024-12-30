import { CategoryService } from './category.service';
export declare class CategoryController {
    private readonly transactionService;
    constructor(transactionService: CategoryService);
    getCategories(): Promise<import("./category.entity").ICategory[]>;
    createCategory(name: string, type: string, description: string): Promise<import("./category.entity").ICategory>;
    updateCategory(id: number, name: string, type: string, description: string): void;
    deleteCategory(id: number): void;
}
