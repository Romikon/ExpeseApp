"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const budget_entity_1 = require("./budget.entity");
let BudgetService = class BudgetService {
    constructor(budgetRepository, budgetUpdateRepository) {
        this.budgetRepository = budgetRepository;
        this.budgetUpdateRepository = budgetUpdateRepository;
    }
    getBudgets() {
        return this.budgetRepository.find();
    }
    createBudget(name, currency) {
        const month = new Date().toLocaleString('default', { month: 'long' });
        const budget = this.budgetRepository.create({ name, currency, month });
        return this.budgetRepository.save(budget);
    }
    updateBudget(id, name, currency) {
        return this.budgetUpdateRepository.update(id, { name, currency });
    }
    deleteBudet(id) {
        this.budgetRepository.delete(id);
    }
};
exports.BudgetService = BudgetService;
exports.BudgetService = BudgetService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(budget_entity_1.IBudget)),
    __param(1, (0, typeorm_1.InjectRepository)(budget_entity_1.IUpdateBudget)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], BudgetService);
//# sourceMappingURL=budget.service.js.map