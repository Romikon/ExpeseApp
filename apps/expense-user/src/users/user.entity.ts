import { Column, Entity } from 'typeorm';
import { BaseEntity } from '@app/common-entity';
@Entity({ schema: 'users', name: 'users' })
export class UserEntity extends BaseEntity{
  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true, unique: true })
  email: string;

  @Column({ nullable: true })
  password: string;
}
