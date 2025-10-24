import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { DocumentType, filesUrlSuffix, userStatus } from 'src/common/db.data.types';

@Injectable()
export class AdminService {
  constructor(private databaseService: DatabaseService) { }

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

  // Get a specific user by ID
  async getUserById(userId: string) {
    try {
      const user = await this.databaseService.user.findUnique({
        where: { id: userId },
      });

      if (!user) {
        return {
          success: false,
          message: 'User not found',
        };
      }

      return {
        success: true,
        data: {
          ...user,
          documentStatus: this.getDocumentStatus(user),
          documentsUploaded: this.getUploadedDocuments(user),
        },
      };
    } catch (error) {
      return {
        success: false,
        message: 'Error fetching user',
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  // Get users with pagination
  async getUsersPaginated(page: number = 1, limit: number = 10) {
    try {
      const skip = (page - 1) * limit;

      const [users, total] = await Promise.all([
        this.databaseService.user.findMany({
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
            phone: true,
            passportDoc: true,
            emiratesIdDoc: true,
            proofOfAddressDoc: true,
            createdAt: true,
            updatedAt: true,
          },
          orderBy: {
            createdAt: 'desc',
          },
          skip,
          take: limit,
        }),
        this.databaseService.user.count(),
      ]);

      const usersWithStatus = users.map((user) => ({
        ...user,
        documentStatus: this.getDocumentStatus(user),
        documentsUploaded: this.getUploadedDocuments(user),
      }));

      return {
        success: true,
        data: usersWithStatus,
        pagination: {
          page,
          limit,
          total,
          totalPages: Math.ceil(total / limit),
        },
      };
    } catch (error) {
      return {
        success: false,
        message: 'Error fetching users',
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  // Get document statistics
  async getDocumentStats() {
    try {
      const total = await this.databaseService.user.count();
      const withPassport = await this.databaseService.user.count({
        where: { passportDoc: { not: null } },
      });
      const withEmiratesId = await this.databaseService.user.count({
        where: { emiratesIdDoc: { not: null } },
      });
      const withProofOfAddress = await this.databaseService.user.count({
        where: { proofOfAddressDoc: { not: null } },
      });
      const completeDocuments = await this.databaseService.user.count({
        where: {
          AND: [
            { passportDoc: { not: null } },
            { emiratesIdDoc: { not: null } },
            { proofOfAddressDoc: { not: null } },
          ],
        },
      });

      return {
        success: true,
        data: {
          totalUsers: total,
          withPassport,
          withEmiratesId,
          withProofOfAddress,
          completeDocuments,
          incompleteDocuments: total - completeDocuments,
        },
      };
    } catch (error) {
      return {
        success: false,
        message: 'Error fetching statistics',
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  private getDocumentStatus(user: any): string {
    const hasPassport = !!user.passportDoc;
    const hasEmiratesId = !!user.emiratesIdDoc;
    const hasProofOfAddress = !!user.proofOfAddressDoc;

    if (hasPassport && hasEmiratesId && hasProofOfAddress) {
      return 'Complete';
    } else if (hasPassport || hasEmiratesId || hasProofOfAddress) {
      return 'Partial';
    } else {
      return 'Pending';
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

  private getUploadedDocuments(user: any): string[] {
    const documents: string[] = [];
    if (user.passportDoc) documents.push('Passport');
    if (user.emiratesIdDoc) documents.push('Emirates ID');
    if (user.proofOfAddressDoc) documents.push('Proof of Address');
    return documents;
  }


}
