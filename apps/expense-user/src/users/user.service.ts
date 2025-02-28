import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { PaginationDto, CreateUserDto, GetUserDto, UpdateUserDto } from '../dto/dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async getUsers(pagination: PaginationDto): Promise<GetUserDto[]> {
    const { page, size } = pagination
    if (typeof(page) !== 'undefined' && typeof(size) !== 'undefined'){

      return this.userRepository.find({ skip: (page - 1) * size, take: size });
    }
    return this.userRepository.find();
  }

  async createUser(newUser: CreateUserDto): Promise<CreateUserDto> {
    const { name, email, password } = newUser
    const User = this.userRepository.create({ name, email, password });

    return this.userRepository.save(User);
  }

  async updateUser(id: number, updateUser: UpdateUserDto): Promise<UpdateUserDto> {
    const userExist = await this.userRepository.findOne({ where: { id }});
    const { name, email, password } = updateUser;
    
    if (!userExist)
      throw new Error('User didnt exist!')

    userExist.name = name;
    userExist.email = email;
    userExist.password = password;
    return this.userRepository.save(userExist);
  }

  deleteUser(id: number): Promise<DeleteResult>{
    return this.userRepository.delete(id);
  }
}
