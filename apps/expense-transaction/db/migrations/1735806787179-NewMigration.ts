import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1735806787179 implements MigrationInterface {
    name = 'NewMigration1735806787179'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE transactions.transactions (
        id serial4 NOT NULL,
        budgetid integer NOT NULL,
        categoryid integer NOT NULL,
        type varchar(255) NOT NULL,
        sum integer NOT NULL,
        created_at timestamp DEFAULT CURRENT_TIMESTAMP,
        updated_at timestamp DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (id)--,
        --FOREIGN KEY (budgetid) REFERENCES budget.budget(id) ON DELETE CASCADE
)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE transactions.transactions`);
    }

}
