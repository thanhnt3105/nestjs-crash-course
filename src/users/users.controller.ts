import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserRequest } from './dto/create-user.request';
import { User } from './entities/users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers(): User[] {
    return this.usersService.findAll();
  }

  @Get(':id')
  getUserById(@Param('id') id: string): User {
    return this.usersService.findById(Number(id));
  }

  @Post()
  createUser(@Body() user: UserRequest): User {
    return this.usersService.create(user);
  }
}
