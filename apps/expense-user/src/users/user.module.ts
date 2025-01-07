import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { IUser } from './user.entity';
import * as dotenv from 'dotenv';
import { typeOrmConfig } from 'src/config/config';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([IUser]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
