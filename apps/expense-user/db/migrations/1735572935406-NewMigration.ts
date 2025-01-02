import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1735572935406 implements MigrationInterface {
    name = 'NewMigration1735572935406'

    public async up(queryRunner: QueryRunner): Promise<void> {
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

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"."users"`);
    }

}
