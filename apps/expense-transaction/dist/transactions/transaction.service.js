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
exports.TransactionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const transaction_entity_1 = require("./transaction.entity");
const typeorm_2 = require("typeorm");
const amqp = require("amqplib");
let TransactionService = class TransactionService {
    constructor(transactionReposetory) {
        this.transactionReposetory = transactionReposetory;
        this.queue = 'writeAddictionalInfo';
        this.rabbitmqUrl = 'amqps://wnobioyl:ykNP9ryF9Zyb_EjxntfDy17IcnyLLirN@hawk.rmq.cloudamqp.com/wnobioyl';
    }
    async connect() {
        this.connection = await amqp.connect(this.rabbitmqUrl);
        this.channel = await this.connection.createChannel();
        await this.channel.assertQueue(this.queue);
    }
    async sendMessage(message) {
        const messageBuffer = Buffer.from(JSON.stringify(message));
        this.channel.sendToQueue(this.queue, messageBuffer);
        console.log(message);
    }
    getTransactions() {
        return this.transactionReposetory.find();
    }
    async createTransaction(budgetid, categoryid, type, sum, activity) {
        const transaction = await this.transactionReposetory.create({ budgetid, categoryid, type, sum, activity });
        await this.sendMessage({ type: type, sum: sum, activity: activity });
        return this.transactionReposetory.save(transaction);
    }
    updateTransaction(id, budgetid, categoryid, type, sum, activity) {
        return this.transactionReposetory.update(id, { budgetid, categoryid, type, sum, activity });
    }
    deleteTransaction(id) {
        this.transactionReposetory.delete(id);
    }
};
exports.TransactionService = TransactionService;
exports.TransactionService = TransactionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(transaction_entity_1.ITransaction)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TransactionService);
//# sourceMappingURL=transaction.service.js.map