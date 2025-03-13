import { MigrationInterface, QueryRunner } from "typeorm";

export class BalanceTable1482739410047 implements MigrationInterface {
    name = 'BalanceTable1482739410047'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE budget.balance (
            id serial4 NOT NULL,
            user_id integer NOT NULL,
            amount integer NOT NULL,
            budget_id integer Not NULL,
            created_at timestamp DEFAULT CURRENT_TIMESTAMP,
            updated_at timestamp DEFAULT CURRENT_TIMESTAMP,
            CONSTRAINT balance_key PRIMARY KEY (id),
            CONSTRAINT budget_id_pk FOREIGN KEY (budget_id) REFERENCES budget.budget(id) ON DELETE CASCADE
)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE budget.balance;`);
    }

}
