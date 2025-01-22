import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { HealthModule } from './health';
import { DatabaseService } from './shutdown-hook/database.shutdown.hook';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions),
    UserModule,
    HealthModule
  ],
  controllers: [],
  providers: [DatabaseService],
})
export class AppModule {}
