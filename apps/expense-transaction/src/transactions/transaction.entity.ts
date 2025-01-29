import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ schema: 'transactions', name: 'transactions' })
export class TransactionEntity extends BaseEntity{
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
