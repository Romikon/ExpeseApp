import { Module } from '@nestjs/common';
import { BudgetModule } from './budget/budget.module';
import { DatabaseService } from './shutdown-hook/database.hutdown.hook';
import { LoggerModule } from 'nestjs-pino';
import { ConfigModule } from '@nestjs/config';
import { Config } from '../src/config/config';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [Config],
    }),
    BudgetModule,
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
    }),
  ],
  controllers: [],
  providers: [DatabaseService],
})
export class AppModule {}
