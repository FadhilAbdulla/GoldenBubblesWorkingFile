import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { ArkService } from 'src/ark/ark.service';
import { MailModule } from 'src/mail/mail.module';

@Module({
  imports: [MailModule],
  controllers: [AdminController],
  providers: [AdminService, ArkService],

})
export class AdminModule { }
