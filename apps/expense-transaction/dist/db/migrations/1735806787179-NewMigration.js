"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewMigration1735806787179 = void 0;
class NewMigration1735806787179 {
    constructor() {
        this.name = 'NewMigration1735806787179';
    }
    async up(queryRunner) {
        await queryRunner.query(`
        CREATE TABLE info.info (
        id serial4 NOT NULL,
        budgetid integer NOT NULL,
        categoryid integer NOT NULL,
        type varchar(255) NOT NULL,
        sum integer NOT NULL,
        created_at timestamp DEFAULT CURRENT_TIMESTAMP NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (budgetid) REFERENCES budget.budget(id) ON DELETE CASCADE
)`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE info.info`);
    }
}
exports.NewMigration1735806787179 = NewMigration1735806787179;
//# sourceMappingURL=1735806787179-NewMigration.js.map