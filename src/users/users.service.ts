import { Injectable } from '@nestjs/common';
import { UserRequest } from './dto/create-user.request';
import { User } from './entities/users.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      name: 'Nguyen Trung Thanh',
      school: 'HUST',
    },
    {
      id: 2,
      name: 'Le Hoang Anh',
      school: 'NEU',
    },
    {
      id: 3,
      name: 'Dang Viet Anh',
      school: 'FPT',
    },
  ];

  findAll(): User[] {
    return this.users;
  }

  findById(userId: number): User {
    return this.users.find((user) => user.id === userId);
  }

  create(user: UserRequest): User {
    const newUser = { id: Date.now(), ...user };
    this.users.push(newUser);
    return newUser;
  }
}
