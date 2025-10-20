import { HttpException, Injectable } from '@nestjs/common';
import { MailService } from '../mail/mail.service';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class AuthService {

  constructor(private mailService: MailService, private databaseService: DatabaseService) { }

  async register(createAuthDto: {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    phone: string;
  }) {

    const userExists = await this.databaseService.user.findUnique({
      where: { email: createAuthDto.email },
    });

    if (userExists?.passportDoc) {
      throw new HttpException('User with this email already exists', 400);
    }
    else if (userExists) {
      return {
        success: true,
        message: 'Document Upload Pending',
        userId: userExists?.id,
      }
    }
    // Here you would save the user to database
    const user = await this.databaseService.user.create({ data: createAuthDto });

    if (!user) {
      throw new HttpException('User creation failed', 500);
    }

    // Send welcome email after successful registration
    // const emailData = {
    //   firstName: createAuthDto.firstName,
    //   lastName: createAuthDto.lastName,
    //   email: createAuthDto.email,
    //   phone: createAuthDto.phone,
    //   appName: process.env.APP_NAME || 'Golden Bubbles',
    //   registrationDate: new Date().toLocaleDateString(),
    //   verificationLink: `https://yourdomain.com/verify?email=${createAuthDto.email}`,
    // };

    // Send welcome email (this is an individual function call)
    // await this.mailService.sendWelcomeEmail(createAuthDto.email, emailData);


    return {
      success: true,
      message: 'User registered successfully, Please upload your documents to proceed',
      userId: user?.id,
    };

  }

  async documentUpload(
    userId: string,
    files: {
      passport?: Express.Multer.File[];
      emirates_id?: Express.Multer.File[];
      proof_of_address?: Express.Multer.File[];
    },
  ) {
    try {
      console.log(`Processing document upload for user ID: ${userId}`);

      const uploadedDocuments: {
        passport?: string;
        emirates_id?: string;
        proof_of_address?: string;
      } = {};

      // Process each file type and get the filename
      if (files.passport && files.passport[0]) {
        uploadedDocuments.passport = files.passport[0].filename;
      }

      if (files.emirates_id && files.emirates_id[0]) {
        uploadedDocuments.emirates_id = files.emirates_id[0].filename;
      }

      if (files.proof_of_address && files.proof_of_address[0]) {
        uploadedDocuments.proof_of_address = files.proof_of_address[0].filename;
      }

      const UserData = await this.databaseService.user.findUnique({
        where: { id: userId },
      });

      if (!UserData) {
        return {
          success: false,
          message: 'User not found',
          userId: userId,
        };
      }

      const updatedUser = await this.databaseService.user.update({
        where: { id: userId },
        data: {
          passportDoc: uploadedDocuments.passport,
          emiratesIdDoc: uploadedDocuments.emirates_id,
          proofOfAddressDoc: uploadedDocuments.proof_of_address,
        },
      });


      // TODO: Update user record in database with document filenames
      // Example:
      // await this.prisma.user.update({
      //   where: { id: userId },
      //   data: {
      //     passportDoc: uploadedDocuments.passport,
      //     emiratesIdDoc: uploadedDocuments.emirates_id,
      //     proofOfAddressDoc: uploadedDocuments.proof_of_address,
      //   }
      // });

      // Send document verification email after upload
      const documentsProcessed = Object.keys(uploadedDocuments).map((key) => {
        const docNames: Record<string, string> = {
          passport: 'Passport',
          emirates_id: 'Emirates ID',
          proof_of_address: 'Proof of Address',
        };
        return docNames[key] || key;
      });

      // Send welcome email (this is an individual function call)
      await this.mailService.sendWelcomeEmail(updatedUser.email, updatedUser.firstName);

      // Example email data(in real app, you'd get this from user context)
      // const emailData = {
      //   firstName: 'John', // Replace with actual user data from database
      //   lastName: 'Doe', // Replace with actual user data from database
      //   status: 'Pending' as const,
      //   statusClass: 'pending' as const,
      //   message:
      //     'Your documents have been uploaded successfully and are now under review.',
      //   documentsProcessed,
      //   nextSteps: 'We will review your documents within 2-3 business days.',
      //   appName: process.env.APP_NAME || 'Golden Bubbles',
      // };

      // Send email notification (this is an individual function call)
      // this.mailService.sendDocumentVerificationEmail(updatedUser.email, emailData);

      // For now, we'll just return the response
      // Later you can save this to a user record in the database

      return {
        success: true,
        message: 'Documents uploaded successfully',
        userId: userId,
        uploadedFiles: uploadedDocuments,
        fileDetails: {
          passport: files.passport?.[0]
            ? {
              originalName: files.passport[0].originalname,
              filename: files.passport[0].filename,
              size: files.passport[0].size,
              mimetype: files.passport[0].mimetype,
            }
            : null,
          emirates_id: files.emirates_id?.[0]
            ? {
              originalName: files.emirates_id[0].originalname,
              filename: files.emirates_id[0].filename,
              size: files.emirates_id[0].size,
              mimetype: files.emirates_id[0].mimetype,
            }
            : null,
          proof_of_address: files.proof_of_address?.[0]
            ? {
              originalName: files.proof_of_address[0].originalname,
              filename: files.proof_of_address[0].filename,
              size: files.proof_of_address[0].size,
              mimetype: files.proof_of_address[0].mimetype,
            }
            : null,
        },
      };
    } catch (error) {
      return {
        success: false,
        message: 'Error uploading documents',
        userId: userId,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }
}
