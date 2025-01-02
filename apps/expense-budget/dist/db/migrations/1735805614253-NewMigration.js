"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewMigration1735805614253 = void 0;
class NewMigration1735805614253 {
    constructor() {
        this.name = 'NewMigration1735805614253';
    }
    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE budget.budget (
            id serial4 NOT NULL,
            name varchar NULL,
            currency varchar NULL,
            month varchar NULL,
            CONSTRAINT budget_key PRIMARY KEY (id)
)`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE budget.budget;`);
    }
}
exports.NewMigration1735805614253 = NewMigration1735805614253;
//# sourceMappingURL=1735805614253-NewMigration.js.map