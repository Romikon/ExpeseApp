import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from '../db/data-source';
import { HealthModule } from './health';
import { DatabaseService } from './shutdown-hook/database.shutdown.hook';
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions),
    UserModule,
    HealthModule,
    LoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: 'pino-pretty',
          options: {
            singleLine: true,
          },
        },
      },
    })
  ],
  controllers: [],
  providers: [DatabaseService],
})
export class AppModule {}
