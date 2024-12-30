"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTable1735555103977 = void 0;
class UserTable1735555103977 {
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE users.users (
            id serial4 NOT NULL,
            name varchar(255) NOT NULL,
            email varchar(255) NOT NULL,
            password varchar(255) NOT NULL,
            created_at timestamp DEFAULT CURRENT_TIMESTAMP NULL,
            CONSTRAINT users_key PRIMARY KEY (id)
)`);
    }
    async down(queryRunner) {
        `DROP TABLE users.users;`;
    }
}
exports.UserTable1735555103977 = UserTable1735555103977;
//# sourceMappingURL=1735555103977-userTable.js.map