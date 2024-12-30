"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'roman1',
    password: '123123',
    database: 'budget',
    schema: 'users',
    entities: ['src/users/user.entity.ts'],
    migrations: ['src/migrations/*.ts'],
    synchronize: false,
    logging: true,
    migrationsTableName: "users",
});
exports.default = exports.AppDataSource;
//# sourceMappingURL=typeorm.config.js.map