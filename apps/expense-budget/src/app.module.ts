import { Module } from '@nestjs/common';
import { BudgetModule } from './budget/budget.module';
import { HealthModule } from './health';
import { DatabaseService } from './shutdown-hook/database.hutdown.hook';
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [
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
    })
  ],
  controllers: [],
  providers: [DatabaseService],
})
export class AppModule {}
