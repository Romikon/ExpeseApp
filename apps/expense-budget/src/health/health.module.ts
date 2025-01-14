import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TerminusModule } from '@nestjs/terminus';
import { HealthController } from './health.controller';
import { HealthService } from './health.service';
import { typeOrmConfig } from '../config/config';

@Module({
  imports: [
    TerminusModule,
    TypeOrmModule.forRoot(typeOrmConfig),
  ],
  controllers: [HealthController],
  providers: [HealthService],
})
export class HealthModule {}
