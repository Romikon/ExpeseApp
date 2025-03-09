import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthUserDto, LoginUserDto } from '../dto';
import { UserService } from '../users/user.service';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService, private readonly userService: UserService) {}

  async auth(authUserDto: AuthUserDto) {
    const payload = { email: authUserDto.email };

    const userExist = await this.userService.getUser(authUserDto.email);

    if(userExist)
      return this.jwtService.sign(payload);
    
    return 'User does not exist! You need to login';
  }

  async login(loginUserDto: LoginUserDto) {
    return await this.userService.createUser(loginUserDto);
  }
}
