import { Module } from '@nestjs/common';
import { TransactionModule } from './transactions/transaction.module';
import { HealthModule } from './health';

@Module({
  imports: [
    TransactionModule,
    HealthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
