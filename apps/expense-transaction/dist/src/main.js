"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const transaction_module_1 = require("./transactions/transaction.module");
const transaction_service_1 = require("./transactions/transaction.service");
const dotenv = require("dotenv");
dotenv.config();
async function bootstrap() {
    const app = await core_1.NestFactory.create(transaction_module_1.TransactionModule);
    const appService = app.get(transaction_service_1.TransactionService);
    await appService.connect();
    await app.listen(process.env.PORT);
    console.log('NestJS app running on http://127.0.0.1:8030');
    await app.startAllMicroservices();
}
bootstrap();
//# sourceMappingURL=main.js.map