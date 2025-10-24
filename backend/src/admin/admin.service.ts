import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { DocumentType, filesUrlSuffix, userStatus } from 'src/common/db.data.types';
import { ArkService } from 'src/ark/ark.service';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class AdminService {
  constructor(private databaseService: DatabaseService, private readonly arkService: ArkService, private mailService: MailService) { }

  // Get all users with their document status
  async getDashboardStats() {
    return {
      overallBalance: 200,
      totalMonthlyDeposit: 300,
      totalMonthlyWithdrawal: 400,
      highestDepositAmount: 200,

      customer: 50,
      pendingRegistration: 10,
      pendingFundRequest: 5,
      pendingApproval: 2,
    };
  }
  async getAllUsers() {
    try {
      const users = await this.databaseService.user.findMany({
        orderBy: {
          createdAt: 'desc',
        },
        include: {
          documents: {
            include: {
              document: true
            }
          }
        }
      });

      const convertedUserData = users.map(user => ({
        id: user.id,
        name: user.firstName + ' ' + user.lastName,
        phone: user.phone,
        email: user.email,
        createdAt: user.createdAt,
        status: user.approved === false ? userStatus.pending : user.active ? userStatus.active : userStatus.suspended,
        documents: user.documents.map(doc => { return { type: DocumentType[doc.document.documentType], url: `${filesUrlSuffix}/${doc.document.generatedKey}` } }),
        // documentStatus: this.getDocumentStatus(user),
      }));



      return convertedUserData;
    } catch (error) {
      return {
        success: false,
        message: 'Error fetching users',
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }
  async adminLogin(username: string, password: string) {
    // For demonstration, using hardcoded credentials. In production, use a secure method.
    const adminUsername = 'admin@thegoldenbubbles.com';
    const adminPassword = 'root';

    if (username === adminUsername && password === adminPassword) {
      return {
        success: true,
        message: 'Login successful',
        // In production, return a JWT or session token here
      };
    } else {
      return {
        success: false,
        message: 'Invalid username or password',
      };
    }
  }
  async approveUser(userId: string) {
    try {
      const UserData = await this.databaseService.user.update({ where: { id: userId }, data: { approved: true } })
      const NewTradingAccount = await this.databaseService.tradingAccount.create({
        data: {
          userId: userId,
          tradingAccountType: 1,
          username: `${UserData.firstName.toUpperCase()}${Math.floor(1000 + Math.random() * 9000)}`,
          password: UserData.password,
        }
      })
      if (!NewTradingAccount) {
        return {
          success: false,
          message: 'Try Again',
        };
      }
      const ArkNewAccountCreation = await this.arkService.createNewUserInArk({
        firstName: UserData.firstName,
        lastName: UserData.lastName,
        username: NewTradingAccount.username,
        password: NewTradingAccount.password,
        country: 'UAE',
        mobile: UserData.phone,
        email: UserData.email
      })
      // const ArkNewAccountCreation = true; //--- IGNORE ---
      if (UserData && NewTradingAccount && ArkNewAccountCreation) {
        const UpdatedTradingAccount = await this.databaseService.tradingAccount.update({
          where: { id: NewTradingAccount.id },
          data: { active: true }
        })
        const mailSent = await this.mailService.sendVerificationMailwithCredentials(UserData.email,
          UserData.firstName, NewTradingAccount.username, NewTradingAccount.password
        )
      }

      return {
        success: true,
        message: 'User approved successfully',
      }

    }
    catch (error) {
      return {
        success: false,
        message: 'Error approving user',
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }




}
