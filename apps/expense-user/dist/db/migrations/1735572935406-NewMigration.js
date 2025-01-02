"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewMigration1735572935406 = void 0;
class NewMigration1735572935406 {
    constructor() {
        this.name = 'NewMigration1735572935406';
    }
    async up(queryRunner) {
        await queryRunner.query(`
    CREATE TABLE "users"."users" (
    id serial4 NOT NULL,
    name varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    created_at timestamp DEFAULT CURRENT_TIMESTAMP NULL,
    CONSTRAINT users_key PRIMARY KEY (id)
)`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "users"."users"`);
    }
}
exports.NewMigration1735572935406 = NewMigration1735572935406;
//# sourceMappingURL=1735572935406-NewMigration.js.map