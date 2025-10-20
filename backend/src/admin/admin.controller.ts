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

  // Get all users
  @Get('users')
  getAllUsers() {
    return this.adminService.getAllUsers();
  }

  // Get users with pagination
  @Get('users/paginated')
  getUsersPaginated(
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '10',
  ) {
    return this.adminService.getUsersPaginated(
      parseInt(page, 10),
      parseInt(limit, 10),
    );
  }

  // Get specific user by ID
  @Get('users/:id')
  getUserById(@Param('id') id: string) {
    return this.adminService.getUserById(id);
  }

  // Get document statistics
  @Get('stats/documents')
  getDocumentStats() {
    return this.adminService.getDocumentStats();
  }

  // Serve document files
  @Get('documents/:filename')
  getDocument(@Param('filename') filename: string) {
    // This endpoint will serve the uploaded document files
    // You can implement file serving logic here
    return {
      message: `Serving document: ${filename}`,
      url: `/uploads/${filename}`,
    };
  }


}
