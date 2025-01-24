import { Controller, Get, Post, Body, Param, Put, Delete, Query, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { PaginationDto, CreateUserDto, GetUserDto, UpdateUserDto } from '../dto/dto';
import { DeleteResult } from 'typeorm';
import { LoggerInterceptor } from 'src/logger/logger';

@Controller('user')
@UseInterceptors(LoggerInterceptor)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAllUsers(@Query() pagination: PaginationDto): Promise<GetUserDto[]> {
    return this.userService.getUsers(pagination);
  }

  @Post()
  addUser(@Body() newUser: CreateUserDto): Promise<CreateUserDto> {
    return this.userService.createUser(newUser);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateUser: UpdateUserDto): Promise<UpdateUserDto> {
    return this.userService.updateUser(id, updateUser);
  }

  @Delete(':id')
  dalelteUser(@Param('id') id: number): Promise<DeleteResult>{
    return this.userService.deleteUser(id);
  }
}
