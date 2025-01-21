import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { User } from './user.entity';
import { PaginationDTO, CreateUserDTO, GetUserDTO, UpdateUserDTO } from '../dto/dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getUsers(limit: PaginationDTO): Promise<GetUserDTO[]> {
    const { firstObjectId, lastObjectId } = limit
    if (typeof(firstObjectId) !== 'undefined' && typeof(lastObjectId) !== 'undefined'){

      return this.userRepository.find({ skip: (firstObjectId - 1) * lastObjectId, take: lastObjectId });
    }
    return this.userRepository.find();
  }

  async createUser(newUser: CreateUserDTO): Promise<CreateUserDTO> {
    const { name, email, password } = newUser
    const User = this.userRepository.create({ name, email, password });

    return this.userRepository.save(User);
  }

  async updateUser(id: number, updateUser: UpdateUserDTO): Promise<UpdateUserDTO> {
    const ifUserExist = await this.userRepository.findOne({ where: { id }})
    
    if (ifUserExist)
      return this.userRepository.save(updateUser);

    return ifUserExist
  }

  deleteUser(id: number): Promise<DeleteResult>{
    return this.userRepository.delete(id);
  }
}
