import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailController } from './mail.controller';

@Module({
  controllers: [MailController],
  providers: [MailService],
  exports: [MailService], // Export MailService so other modules can use it
})
export class MailModule { }
