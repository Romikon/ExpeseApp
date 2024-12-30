import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(){
    return this.userRepository.find();
  }

  createUser(name: string, email: string, password: string){
    const newUser = this.userRepository.create({name, email, password});

    return this.userRepository.save(newUser);
  }

  async updateUser(id: number, name?: string, email?: string, password?: string) {
    await this.userRepository.update(id, { name, email, password });
  
    return this.userRepository.findOne({
      where: { id: id }
    });
  }

  async deleteUser(id: number){
    await this.userRepository.delete(id);
  }
}
