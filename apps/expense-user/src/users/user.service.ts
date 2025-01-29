import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { PaginationDto, CreateUserDto, GetUserDto, UpdateUserDto } from '../dto/index';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async getUsers(paginationDto: PaginationDto): Promise<GetUserDto[]> {
    const { page, size } = paginationDto
    //check if request contain pagination then return with pagination statement
    if (typeof(page) !== 'undefined' && typeof(size) !== 'undefined'){

      return this.userRepository.find({ skip: (page - 1) * size, take: size });
    }
    return this.userRepository.find();
  }

  async createUser(createUserDto: CreateUserDto): Promise<CreateUserDto> {
    const { name, email, password } = createUserDto

    return this.userRepository.save(this.userRepository.create({ name, email, password }));
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<UpdateUserDto> {
    const userExist = await this.userRepository.findOne({ where: { id }});
    const { name, email, password } = updateUserDto;
    
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
