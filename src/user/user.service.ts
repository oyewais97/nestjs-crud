import { Injectable, NotFoundException } from '@nestjs/common';

import { User } from './user.model';
@Injectable()
export class UsersService {
  private users: User[] = [];

  insertUser(name?: string, rollNo?: number, depart?: string, batch?: number) {
    const newUser = new User(name, rollNo, depart, batch);
    this.users.push(newUser);
    return name;
  }
  getUserDetail() {
    return [...this.users];
  }
}
