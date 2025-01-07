import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { HealthModule } from './health';

@Module({
  imports: [
    CategoryModule,
    HealthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
