import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1735806244193 implements MigrationInterface {
    name = 'NewMigration1735806244193'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE category.category (
        id serial4 NOT NULL,
        name varchar(255) NOT NULL,
        type varchar(255) NOT NULL,
        description varchar(255) NOT NULL,
        created_at timestamp DEFAULT CURRENT_TIMESTAMP,
        updated_at timestamp DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT category_key PRIMARY KEY (id)
)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE category.category`);
    }

}  
