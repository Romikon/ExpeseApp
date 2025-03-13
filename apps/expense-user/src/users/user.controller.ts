import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Query,
  UseInterceptors,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import {
  PaginationDto,
  CreateUserDto,
  GetUserDto,
  UpdateUserDto,
} from '../dto/index';
import { DeleteResult } from 'typeorm';
import { LoggerInterceptor } from '../logger/logger';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('User')
@Controller('user')
@UseInterceptors(LoggerInterceptor)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(AuthGuard('jwt')) 
  getAllUsers(@Query() paginationDto?: PaginationDto): Promise<GetUserDto[]> {
    return this.userService.getUsers(paginationDto);
  }

  @UseGuards(AuthGuard('jwt')) 
  @Post()
  addUser(@Body() createUserDto: CreateUserDto): Promise<CreateUserDto> {
    return this.userService.createUser(createUserDto);
  }

  @UseGuards(AuthGuard('jwt')) 
  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UpdateUserDto> {
    return this.userService.updateUser(id, updateUserDto);
  }

  @UseGuards(AuthGuard('jwt')) 
  @Delete(':id')
  dalelteUser(@Param('id') id: number): Promise<DeleteResult> {
    return this.userService.deleteUser(id);
  }
}
