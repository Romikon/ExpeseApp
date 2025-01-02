import { MigrationInterface, QueryRunner } from "typeorm";
export declare class NewMigration1735806244193 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
