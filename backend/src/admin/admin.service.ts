import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class AdminService {
  constructor(private databaseService: DatabaseService) { }

  // Get all users with their document status
  async getAllUsers() {
    try {
      const users = await this.databaseService.user.findMany({
        orderBy: {
          createdAt: 'desc',
        },
      });

      // Add document status for each user
      const usersWithStatus = users.map((user) => ({
        ...user,
        documentStatus: this.getDocumentStatus(user),
        documentsUploaded: this.getUploadedDocuments(user),
      }));

      return {
        success: true,
        data: usersWithStatus,
        total: users.length,
      };
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

  private getUploadedDocuments(user: any): string[] {
    const documents: string[] = [];
    if (user.passportDoc) documents.push('Passport');
    if (user.emiratesIdDoc) documents.push('Emirates ID');
    if (user.proofOfAddressDoc) documents.push('Proof of Address');
    return documents;
  }


}
