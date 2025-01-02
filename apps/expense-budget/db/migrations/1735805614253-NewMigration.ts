import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1735805614253 implements MigrationInterface {
    name = 'NewMigration1735805614253'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE budget.budget (
            id serial4 NOT NULL,
            name varchar NULL,
            currency varchar NULL,
            month varchar NULL,
            CONSTRAINT budget_key PRIMARY KEY (id)
)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE budget.budget;`);
    }

}
