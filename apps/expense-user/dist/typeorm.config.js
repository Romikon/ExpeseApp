"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const user_entity_1 = require("./src/users/user.entity");
const typeorm_1 = require("typeorm");
const configService = new config_1.ConfigService();
exports.default = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'roman1',
    password: '123123',
    entities: [user_entity_1.User],
    migrations: ['migrations/**'],
});
//# sourceMappingURL=typeorm.config.js.map