import { Entity, Column } from 'typeorm';
import { BaseEntity } from '@app/common-entity';

@Entity({ schema: 'budget', name: 'budget' })
export class BudgetEntity extends BaseEntity {
  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  currency: string;

  @Column({ nullable: true })
  month: string;
}
