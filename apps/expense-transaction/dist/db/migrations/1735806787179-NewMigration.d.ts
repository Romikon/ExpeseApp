import { MigrationInterface, QueryRunner } from "typeorm";
export declare class NewMigration1735806787179 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
