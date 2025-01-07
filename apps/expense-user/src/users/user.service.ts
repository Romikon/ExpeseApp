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

  updateUser(id: number, name?: string, email?: string, password?: string) {
    return this.userRepository.update(id, { name, email, password });
  }

  deleteUser(id: number){
    return this.userRepository.delete(id);
  }
}
