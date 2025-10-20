import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) { }

  @Get()
  findAll() {
    return this.mailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mailService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mailService.remove(+id);
  }

  // Test endpoint to send welcome email
  @Post('test-welcome')
  // async testWelcomeEmail(
  //   @Body()
  //   body: {
  //     email: string;
  //     firstName: string;
  //     lastName: string;
  //     phone: string;
  //   },
  // ) {
  //   const emailData = {
  //     firstName: body.firstName,
  //     lastName: body.lastName,
  //     email: body.email,
  //     phone: body.phone,
  //     appName: process.env.APP_NAME || 'Golden Bubbles',
  //     registrationDate: new Date().toLocaleDateString(),
  //     verificationLink: 'https://yourdomain.com/verify?token=abc123',
  //   };

  //   const success = await this.mailService.sendWelcomeEmail(
  //     body.email,
  //     emailData,
  //   );

  //   return {
  //     success,
  //     message: success
  //       ? 'Welcome email sent successfully'
  //       : 'Failed to send welcome email',
  //   };
  // }

  // Test endpoint to send document verification email
  @Post('test-document-verification')
  async testDocumentVerificationEmail(
    @Body()
    body: {
      email: string;
      firstName: string;
      lastName: string;
      status: 'Approved' | 'Pending' | 'Rejected';
      message?: string;
    },
  ) {
    const statusClassMap = {
      Approved: 'success' as const,
      Pending: 'pending' as const,
      Rejected: 'rejected' as const,
    };

    const emailData = {
      firstName: body.firstName,
      lastName: body.lastName,
      status: body.status,
      statusClass: statusClassMap[body.status],
      message: body.message,
      documentsProcessed: ['Passport', 'Emirates ID', 'Proof of Address'],
      nextSteps:
        body.status === 'Approved'
          ? 'Your account is now fully verified!'
          : body.status === 'Pending'
            ? 'Please wait while we review your documents.'
            : 'Please re-submit your documents with correct information.',
      appName: process.env.APP_NAME || 'Golden Bubbles',
    };

    const success = await this.mailService.sendDocumentVerificationEmail(
      body.email,
      emailData,
    );

    return {
      success,
      message: success
        ? 'Document verification email sent successfully'
        : 'Failed to send document verification email',
    };
  }

  // Test endpoint for formatted text email
  @Post('test-formatted-text')
  async testFormattedTextEmail(
    @Body()
    body: {
      email: string;
      subject: string;
      content: string;
    },
  ) {
    const success = await this.mailService.sendFormattedTextEmail(
      body.email,
      body.subject,
      body.content,
    );

    return {
      success,
      message: success
        ? 'Formatted text email sent successfully'
        : 'Failed to send formatted text email',
    };
  }

  // Test endpoint for styled text email
  @Post('test-styled-text')
  async testStyledTextEmail(
    @Body()
    body: {
      email: string;
      subject: string;
      content: string;
      backgroundColor?: string;
      textColor?: string;
      fontFamily?: string;
      fontSize?: string;
    },
  ) {
    const success = await this.mailService.sendStyledTextEmail(
      body.email,
      body.subject,
      body.content,
      {
        backgroundColor: body.backgroundColor,
        textColor: body.textColor,
        fontFamily: body.fontFamily,
        fontSize: body.fontSize,
      },
    );

    return {
      success,
      message: success
        ? 'Styled text email sent successfully'
        : 'Failed to send styled text email',
    };
  }

  // Test endpoint for notification email
  @Post('test-notification')
  async testNotificationEmail(
    @Body()
    body: {
      email: string;
      subject: string;
      message: string;
      type?: 'success' | 'warning' | 'error' | 'info';
    },
  ) {
    const success = await this.mailService.sendNotificationEmail(
      body.email,
      body.subject,
      body.message,
      body.type || 'info',
    );

    return {
      success,
      message: success
        ? 'Notification email sent successfully'
        : 'Failed to send notification email',
    };
  }
}
