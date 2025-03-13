import {
  Column,
  Entity,
} from 'typeorm';
import { BaseEntity } from '@app/common-entity';

@Entity({ schema: 'users', name: 'users' })
export class LoginUserEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 255,  nullable: true  })
  name: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 255 })
  password: string;
}
