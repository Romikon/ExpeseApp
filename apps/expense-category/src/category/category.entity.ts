import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'category', name: 'category' })
export class ICategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  type: string;

  @Column({ type: 'varchar', length: 255 })
  description: string;

}
