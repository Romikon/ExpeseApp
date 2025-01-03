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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const category_entity_1 = require("./category.entity");
const typeorm_2 = require("typeorm");
const amqp = require("amqplib");
let CategoryService = class CategoryService {
    constructor(transactionReposetory) {
        this.transactionReposetory = transactionReposetory;
        this.queue = 'writeAddictionalInfo';
        this.rabbitmqUrl = 'amqps://wnobioyl:ykNP9ryF9Zyb_EjxntfDy17IcnyLLirN@hawk.rmq.cloudamqp.com/wnobioyl';
    }
    async onModuleInit() {
        this.connection = await amqp.connect(this.rabbitmqUrl);
        this.channel = await this.connection.createChannel();
        await this.channel.assertQueue(this.queue);
        this.channel.consume(this.queue, async (msg) => {
            const data = JSON.parse(msg.content.toString());
            let description;
            if (data.type == 'income') {
                description = `income was received in the amount ${data.sum} of ${data.activity} category`;
            }
            else {
                description = `expenses in the amount of ${data.sum} of ${data.activity} category`;
            }
            const createdInfo = this.transactionReposetory.create({
                name: data.activity,
                type: data.type,
                description: description
            });
            this.channel.ack(msg);
            return this.transactionReposetory.save(createdInfo);
        });
    }
    getCategories() {
        return this.transactionReposetory.find();
    }
    createCategory(name, type, description) {
        const transaction = this.transactionReposetory.create({ name, type, description });
        return this.transactionReposetory.save(transaction);
    }
    updateCategory(id, name, type, description) {
        return this.transactionReposetory.update(id, { name, type, description });
    }
    deleteCategory(id) {
        this.transactionReposetory.delete(id);
    }
};
exports.CategoryService = CategoryService;
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(category_entity_1.ICategory)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CategoryService);
//# sourceMappingURL=category.service.js.map