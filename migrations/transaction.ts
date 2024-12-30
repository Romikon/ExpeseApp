import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateInfoTable1633028974480 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "info",
        columns: [
          {
            name: "id",
            type: "serial",
            isPrimary: true,
          },
          {
            name: "budgetid",
            type: "integer",
          },
          {
            name: "categoryid",
            type: "integer",
          },
          {
            name: "type",
            type: "varchar",
            length: "255",
          },
          {
            name: "sum",
            type: "integer",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
            isNullable: true,
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "info",
      new TableForeignKey({
        columnNames: ["budgetid"],
        referencedColumnNames: ["id"],
        referencedTableName: "budget",
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("info", "budgetid");
    await queryRunner.dropTable("info");
  }
}
