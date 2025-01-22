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

  async getUsers(limit: PaginationDto): Promise<GetUserDto[]> {
    const { firstObjectId, lastObjectId } = limit
    if (typeof(firstObjectId) !== 'undefined' && typeof(lastObjectId) !== 'undefined'){

      return this.userRepository.find({ skip: (firstObjectId - 1) * lastObjectId, take: lastObjectId });
    }
    return this.userRepository.find();
  }

  async createUser(newUser: CreateUserDto): Promise<CreateUserDto> {
    const { name, email, password } = newUser
    const User = this.userRepository.create({ name, email, password });

    return this.userRepository.save(User);
  }

  async updateUser(id: number, updateUser: UpdateUserDto): Promise<UpdateUserDto> {
    const ifUserExist = await this.userRepository.findOne({ where: { id }})
    
    if (ifUserExist)
      return this.userRepository.save(updateUser);

    return ifUserExist
  }

  deleteUser(id: number): Promise<DeleteResult>{
    return this.userRepository.delete(id);
  }
}
