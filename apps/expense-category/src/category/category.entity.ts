import { Entity, Column } from 'typeorm';
import { BaseEntity } from "@app/common-entity"

@Entity({ schema: 'category', name: 'category' })
export class CategoryEntity extends BaseEntity{
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  type: string;

  @Column({ type: 'varchar', length: 255 })
  description: string;
}
