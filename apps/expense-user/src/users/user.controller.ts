import { Controller, Get, Post, Body, Param, Put, Delete, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { PaginationDTO, CreateUserDTO, GetUserDTO, UpdateUserDTO } from '../dto/dto';
import { DeleteResult } from 'typeorm';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAllUsers(@Query() limit: PaginationDTO): Promise<GetUserDTO[]> {
    return this.userService.getUsers(limit);
  }

  @Post()
  addUser(@Body() newUser: CreateUserDTO): Promise<CreateUserDTO> {
    return this.userService.createUser(newUser);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateUser: UpdateUserDTO): Promise<UpdateUserDTO> {
    return this.userService.updateUser(id, updateUser);
  }

  @Delete(':id')
  dalelteUser(@Param('id') id: number): Promise<DeleteResult>{
    return this.userService.deleteUser(id);
  }
}
