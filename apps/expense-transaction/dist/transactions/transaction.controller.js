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
exports.TransactionController = void 0;
const common_1 = require("@nestjs/common");
const transaction_service_1 = require("./transaction.service");
let TransactionController = class TransactionController {
    constructor(transactionService) {
        this.transactionService = transactionService;
    }
    getTransactions() {
        return this.transactionService.getTransactions();
    }
    createTransaction(budgetid, categoryid, type, sum, activity) {
        return this.transactionService.createTransaction(budgetid, categoryid, type, sum, activity);
    }
    updateTransaction(id, budgetid, categoryid, type, sum, activity) {
        this.transactionService.updateTransaction(id, categoryid, budgetid, type, sum, activity);
    }
    deleteTransaction(id) {
        this.transactionService.deleteTransaction(id);
    }
};
exports.TransactionController = TransactionController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TransactionController.prototype, "getTransactions", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('budgetid')),
    __param(1, (0, common_1.Body)('categoryid')),
    __param(2, (0, common_1.Body)('type')),
    __param(3, (0, common_1.Body)('sum')),
    __param(4, (0, common_1.Body)('activity')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, Number, String]),
    __metadata("design:returntype", void 0)
], TransactionController.prototype, "createTransaction", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('budgetid')),
    __param(2, (0, common_1.Body)('categoryid')),
    __param(3, (0, common_1.Body)('type')),
    __param(4, (0, common_1.Body)('sum')),
    __param(5, (0, common_1.Body)('activity')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number, String, Number, String]),
    __metadata("design:returntype", void 0)
], TransactionController.prototype, "updateTransaction", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TransactionController.prototype, "deleteTransaction", null);
exports.TransactionController = TransactionController = __decorate([
    (0, common_1.Controller)('transactions'),
    __metadata("design:paramtypes", [transaction_service_1.TransactionService])
], TransactionController);
//# sourceMappingURL=transaction.controller.js.map