import { Injectable } from '@nestjs/common';
import { ArkService } from './ark/ark.service';

@Injectable()
export class AppService {
  constructor(private readonly arkService: ArkService) {


  }
  async getHello() {
    return " Hello World! ";
  }
} 
