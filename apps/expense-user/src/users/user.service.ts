import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserDTO } from 'src/dto/dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(){
    return this.userRepository.find();
  }

  async createUser(newUser: UserDTO){
    const { name, email, password } = newUser
    const User = this.userRepository.create({ name, email, password });

    return this.userRepository.save(User);
  }

  async updateUser(id: number, updateUser: UserDTO) {
    const { name, email, password } = updateUser
    await this.userRepository.update(id, { name, email, password });

    return this.userRepository.findOne({ where: { id: id }})
  }

  deleteUser(id: number){
    return this.userRepository.delete(id);
  }
}
