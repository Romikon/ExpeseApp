"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const user_module_1 = require("./users/user.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(user_module_1.UserModule);
    await app.listen(8020);
    console.log('NestJS app running on http://127.0.0.1:8020');
}
bootstrap();
//# sourceMappingURL=main.js.map