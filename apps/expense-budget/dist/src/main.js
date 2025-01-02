"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const budget_module_1 = require("./budget/budget.module");
const dotenv = require("dotenv");
dotenv.config();
async function bootstrap() {
    const app = await core_1.NestFactory.create(budget_module_1.BudgetModule);
    await app.listen(process.env.PORT);
    console.log('NestJS app running on http://127.0.0.1:8025');
}
bootstrap();
//# sourceMappingURL=main.js.map