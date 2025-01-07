import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'budget', name: 'budget' })
export class IBudget {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  currency: string;

  @Column({ nullable: true })
  month: string;
}