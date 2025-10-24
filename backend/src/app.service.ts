import { Injectable } from '@nestjs/common';
import { ArkService } from './ark/ark.service';

@Injectable()
export class AppService {
  constructor(private readonly arkService: ArkService) {


  }
  async getHello() {
    const res = await this.arkService.createNewUserInArk({
      firstName: "testFirstName2",
      lastName: "testLastName2",
      username: "testUsername2",
      password: "testPassword2",
      country: "testCountry2",
      mobile: "testMobile2",
      email: "testEmail2@test.com"
    });
    console.log(res);

    return res;
  }
} 
