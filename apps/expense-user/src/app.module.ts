import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { HealthModule } from './health';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions),
    UserModule,
    HealthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
