import { MigrationInterface, QueryRunner } from "typeorm";
export declare class NewMigration1735572935406 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
