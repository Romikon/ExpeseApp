import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAllUsers() {
    return this.userService.findAll();
  }

  @Post()
  addUser(@Body('name') name: string, @Body('email') email: string, @Body('password') password: string){
    return this.userService.createUser(name, email, password);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body('name') name?: string, @Body('email') email?: string, @Body('password') password?: string,
  ){
    return this.userService.updateUser(id, name, email, password);
  }

  @Delete(':id')
  dalelteUser(@Param('id') id: number){
    return this.userService.deleteUser(id);
  }
}
