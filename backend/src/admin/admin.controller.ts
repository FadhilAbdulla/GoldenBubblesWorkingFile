import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) { }

  @Get('dashboard')
  getDashboardStats() {
    return this.adminService.getDashboardStats();
  }

  @Get('users')
  getAllUsers() {
    return this.adminService.getAllUsers();
  }

  @Post('login')
  adminLogin(@Body() body: { username: string; password: string }) {
    return this.adminService.adminLogin(body.username, body.password);
  }

  @Post('approve-user')
  approveUser(@Body() body: { userId: string }) {
    return this.adminService.approveUser(body.userId);
  }

}
