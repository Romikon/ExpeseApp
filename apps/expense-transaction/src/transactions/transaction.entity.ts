import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'info', name: 'info' })
export class ITransaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: true })
  budgetid: number;

  @Column({ type: 'int', nullable: true })
  categoryid: number;

  @Column({ type: 'varchar', length: 255 })
  type: string;

  @Column({ type: 'int' })
  sum: number;

  @Column({ type: 'varchar', length: 255 })
  activity: string;

}
