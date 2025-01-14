import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from '../dto/dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAllUsers(): Promise<UserDTO[]> {
    return this.userService.findAll();
  }

  @Post()
  addUser(@Body() newUser: UserDTO): Promise<UserDTO> {
    return this.userService.createUser(newUser);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateUser: UserDTO): Promise<UserDTO> {
    return this.userService.updateUser(id, updateUser);
  }

  @Delete(':id')
  dalelteUser(@Param('id') id: number){
    return this.userService.deleteUser(id);
  }
}
