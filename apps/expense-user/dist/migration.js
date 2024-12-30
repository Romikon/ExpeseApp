"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsersTable1633028974478 = void 0;
const typeorm_1 = require("typeorm");
class CreateUsersTable1633028974478 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "users",
            columns: [
                {
                    name: "id",
                    type: "serial",
                    isPrimary: true,
                },
                {
                    name: "name",
                    type: "varchar",
                    length: "255",
                },
                {
                    name: "email",
                    type: "varchar",
                    length: "255",
                },
                {
                    name: "password",
                    type: "varchar",
                    length: "255",
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "CURRENT_TIMESTAMP",
                    isNullable: true,
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("users");
    }
}
exports.CreateUsersTable1633028974478 = CreateUsersTable1633028974478;
//# sourceMappingURL=migration.js.map