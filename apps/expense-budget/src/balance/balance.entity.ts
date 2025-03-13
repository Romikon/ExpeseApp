import { BaseEntity } from '@app/common-entity';
import { Entity, Column } from 'typeorm';

@Entity({ schema: 'budget', name: 'balance' })
export class BalanceEntity extends BaseEntity{
  @Column()
  user_id: number;
  
  @Column()
  amount: number;

  @Column()
  budget_id: number;
}
