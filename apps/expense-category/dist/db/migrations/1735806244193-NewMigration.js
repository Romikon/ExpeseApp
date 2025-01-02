"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewMigration1735806244193 = void 0;
class NewMigration1735806244193 {
    constructor() {
        this.name = 'NewMigration1735806244193';
    }
    async up(queryRunner) {
        await queryRunner.query(`
        CREATE TABLE category.category (
        id serial4 NOT NULL,
        name varchar(255) NOT NULL,
        type varchar(255) NOT NULL,
        description varchar(255) NOT NULL,
        created_at timestamp DEFAULT CURRENT_TIMESTAMP NULL,
        CONSTRAINT category_key PRIMARY KEY (id)
)`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE category.category`);
    }
}
exports.NewMigration1735806244193 = NewMigration1735806244193;
//# sourceMappingURL=1735806244193-NewMigration.js.map