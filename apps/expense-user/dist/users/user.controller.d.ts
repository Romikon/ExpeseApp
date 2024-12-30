import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAllUsers(): Promise<import("./user.entity").User[]>;
    addUser(name: string, email: string, password: string): Promise<import("./user.entity").User>;
    update(id: number, name?: string, email?: string, password?: string): Promise<import("./user.entity").User>;
    dalelteUser(id: number): Promise<void>;
}
