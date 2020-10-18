import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createOrphanages1602999198400 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    // REALIZAR ALTERAÇÕES NO BANCO - CRIAR, ALTERAR, DELETAR ...
    await queryRunner.createTable(new Table({
      name: 'orphaneges',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true, // sempre vai ser um número positivo
          isPrimary: true,
          isGenerated: true, // gerada automaticamente
          generationStrategy: 'increment', //autoincrement
        },
        {
          name: 'name',
          type: 'varchar'
        },
        {
          name: 'latitude',
          type: 'decimal',
          scale: 10,
          precision: 2
        },
        {
          name: 'longitude',
          type: 'decimal',
          scale: 10,
          precision: 2
        },
        {
          name: 'about',
          type: 'text',
        },
        {
          name: 'instructions',
          type: 'text',
        },
        {
          name: 'open_on_weekends',
          type: 'boolean',
          default: 'false'
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // DESFAZER O QUE FOI FEITO NO MÉTODO UP

    await queryRunner.dropTable('orphanages')
  }

}
