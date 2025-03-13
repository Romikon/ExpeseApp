import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BalanceService } from './balance.service';
import { BalanceController } from './balance.controller';
import { Config } from '../config/config';
import { BalanceEntity } from './balance.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(Config().typeOrmConfig),
    TypeOrmModule.forFeature([BalanceEntity]),
  ],
  controllers: [BalanceController],
  providers: [BalanceService],
  exports: [BalanceService],
})
export class BalanceModule {}
