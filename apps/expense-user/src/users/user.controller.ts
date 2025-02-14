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
} from '@nestjs/common';
import { UserService } from './user.service';
import {
  PaginationDto,
  CreateUserDto,
  GetUserDto,
  UpdateUserDto,
} from '../dto/index';
import { DeleteResult } from 'typeorm';
import { LoggerInterceptor } from '../interceptors/logger.interceptor.';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('user')
@UseInterceptors(LoggerInterceptor)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAllUsers(@Query() paginationDto: PaginationDto): Promise<GetUserDto[]> {
    return this.userService.getUsers(paginationDto);
  }

  @Post()
  addUser(@Body() createUserDto: CreateUserDto): Promise<CreateUserDto> {
    return this.userService.createUser(createUserDto);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UpdateUserDto> {
    return this.userService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  dalelteUser(@Param('id') id: number): Promise<DeleteResult> {
    return this.userService.deleteUser(id);
  }
}
