import { MigrationInterface, QueryRunner } from "typeorm";

export class TableUser1732108171040 implements MigrationInterface {
    name = 'TableUser1732108171040'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "dni"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "dni" character varying NOT NULL`);
    }

}
