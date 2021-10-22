import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { UsersService } from './user.service';
@Controller('user')
export class UserController {
  constructor(private readonly userapiService: UsersService) {}
  @Post('userpost')
  addUser(
    @Body('name') userName: string,
    @Body('rollNo') userRollNo: number,
    @Body('depart') userDepart: string,
    @Body('batch') userBatch: number,
  ): any {
    const Users = this.userapiService.insertUser(
      userName,
      userRollNo,
      userDepart,
      userBatch,
    );
    return { val: Users };
  }
  @Get('userdetail')
  getUser() {
    return this.userapiService.getUserDetail();
  }
}
