import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthUserDto, LoginUserDto } from '../dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginUserDTO: LoginUserDto) {
    return this.authService.login(loginUserDTO);
  }

  @Post('auth')
  async auth(@Body() authUserDto: AuthUserDto) {
    return this.authService.auth(authUserDto);
  }
}
