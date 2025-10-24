import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';
import { DatabaseModule } from './database/database.module';
import { AdminModule } from './admin/admin.module';
import { ArkService } from './ark/ark.service';
import { ScheduleModule } from '@nestjs/schedule';


@Module({
  imports: [AuthModule, MailModule, DatabaseModule, AdminModule, ScheduleModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, ArkService],
})
export class AppModule { }
