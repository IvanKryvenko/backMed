import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

export type User = any;

@Injectable()
export class UserService {
  private readonly users = [
    {
      userId: 1,
      name: 'Ivan',
      password: '3699',
    },
    {
      userId: 2,
      name: 'Oleksandra',
      password: 'mumani08',
    },
  ];

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.name === username);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
