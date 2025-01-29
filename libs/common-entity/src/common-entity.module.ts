import { Module } from '@nestjs/common';
import { BaseEntity } from './common-entity.service';

@Module({
  providers: [BaseEntity],
  exports: [BaseEntity],
})
export class CommonEntityModule {}
