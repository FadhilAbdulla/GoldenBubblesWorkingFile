import { Injectable, Logger } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as handlebars from 'handlebars';
import * as fs from 'fs';
import * as path from 'path';

interface EmailOptions {
  to: string;
  subject: string;
  template?: string;
  templateData?: any;
  html?: string;
  text?: string;
  plainTextWithFormatting?: string;
}


interface DocumentVerificationEmailData {
  firstName: string;
  lastName: string;
  status: 'Approved' | 'Pending' | 'Rejected';
  statusClass: 'success' | 'pending' | 'rejected';
  message?: string;
  documentsProcessed?: string[];
  nextSteps?: string;
  appName: string;
}

@Injectable()
export class MailService {
  private readonly logger = new Logger(MailService.name);
  private transporter: nodemailer.Transporter;

  constructor() {
    this.createTransporter();
    this.initializeTemplates();
  }

  private createTransporter() {
    this.transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: parseInt(process.env.MAIL_PORT || '587'),
      secure: process.env.MAIL_SECURE === 'true',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // Verify connection configuration
    this.transporter.verify((error) => {
      if (error) {
        this.logger.error('Email configuration error:', error);
      } else {
        this.logger.log('Email service is ready to send messages');
      }
    });
  }

  private loadTemplate(templateName: string): string {
    // Try multiple possible paths for the templates
    const possiblePaths = [
      // Development path (src)
      path.join(
        process.cwd(),
        'src',
        'mail',
        'templates',
        `${templateName}.hbs`,
      ),
      // Production path (dist)
      path.join(__dirname, 'templates', `${templateName}.hbs`),
      // Alternative production path
      path.join(
        process.cwd(),
        'dist',
        'mail',
        'templates',
        `${templateName}.hbs`,
      ),
    ];

    for (const templatePath of possiblePaths) {
      try {
        if (fs.existsSync(templatePath)) {
          return fs.readFileSync(templatePath, 'utf8');
        }
      } catch {
        // Continue to next path
        continue;
      }
    }

    // If no template found, throw error with helpful message
    throw new Error(
      `Template '${templateName}.hbs' not found. Searched paths: ${possiblePaths.join(', ')}`,
    );
  }

  private compileTemplate(templateSource: string, data: any): string {
    const template = handlebars.compile(templateSource);
    return template(data);
  }

  /**
   * Convert plain text with simple formatting to HTML
   * Supports: **bold**, *italic*, [color:red]text[/color], {bg:yellow}text{/bg}
   */
  private formatPlainTextToHtml(text: string): string {
    const formattedText = text
      // Convert line breaks to <br>
      .replace(/\n/g, '<br>')
      // Convert **text** to bold
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      // Convert *text* to italic
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      // Convert [color:colorname]text[/color] to colored text
      .replace(
        /\[color:(.*?)\](.*?)\[\/color\]/g,
        '<span style="color: $1;">$2</span>',
      )
      // Convert {bg:colorname}text{/bg} to background colored text
      .replace(
        /\{bg:(.*?)\}(.*?)\{\/bg\}/g,
        '<span style="background-color: $1; padding: 2px 4px; border-radius: 3px;">$2</span>',
      )
      // Convert [size:number]text[/size] to sized text
      .replace(
        /\[size:(.*?)\](.*?)\[\/size\]/g,
        '<span style="font-size: $1px;">$2</span>',
      )
      // Convert [link:url]text[/link] to links
      .replace(
        /\[link:(.*?)\](.*?)\[\/link\]/g,
        '<a href="$1" style="color: #007bff; text-decoration: none;">$2</a>',
      );

    // Wrap in basic HTML structure for email
    return `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        ${formattedText}
      </div>
    `;
  }

  /**
   * Initialize templates by ensuring they exist in the correct location
   */
  private initializeTemplates(): void {
    const templateNames = ['welcome', 'document-verification'];
    const distTemplateDir = path.join(
      process.cwd(),
      'dist',
      'mail',
      'templates',
    );
    const srcTemplateDir = path.join(process.cwd(), 'src', 'mail', 'templates');

    // Create dist template directory if it doesn't exist
    if (!fs.existsSync(distTemplateDir)) {
      fs.mkdirSync(distTemplateDir, { recursive: true });
    }

    // Copy templates from src to dist if they don't exist in dist
    for (const templateName of templateNames) {
      const srcPath = path.join(srcTemplateDir, `${templateName}.hbs`);
      const distPath = path.join(distTemplateDir, `${templateName}.hbs`);

      if (fs.existsSync(srcPath) && !fs.existsSync(distPath)) {
        try {
          fs.copyFileSync(srcPath, distPath);
          this.logger.log(
            `Copied template ${templateName}.hbs to dist directory`,
          );
        } catch (error) {
          this.logger.warn(
            `Failed to copy template ${templateName}.hbs:`,
            error,
          );
        }
      }
    }
  }

  /**
   * Generic function to send emails with or without templates
   */
  async sendMail(options: EmailOptions): Promise<boolean> {
    try {
      let htmlContent = options.html;

      // If template is specified, load and compile it
      if (options.template) {
        const templateSource = this.loadTemplate(options.template);
        htmlContent = this.compileTemplate(
          templateSource,
          options.templateData,
        );
      }

      // If plain text with formatting is provided, convert to HTML
      if (options.plainTextWithFormatting) {
        htmlContent = this.formatPlainTextToHtml(
          options.plainTextWithFormatting,
        );
      }

      const mailOptions = {
        from: process.env.MAIL_FROM,
        to: options.to,
        subject: options.subject,
        html: htmlContent,
        text: options.text,
      };

      await this.transporter.sendMail(mailOptions);
      this.logger.log(`Email sent successfully to ${options.to}`);
      return true;
    } catch (error) {
      this.logger.error(`Failed to send email to ${options.to}:`, error);
      return false;
    }
  }

  /**
   * Send welcome email to new users
   */
  async sendWelcomeEmail(
    email: string,
    firstname: string,
  ): Promise<boolean> {
    return this.sendMail({
      to: email,
      subject: `Welcome to Golden Bubbles!`,
      template: 'welcome',
      templateData: { firstName: firstname },
    });
  }

  async sendVerificationMailwithCredentials(
    email: string,
    firstname: string,
    username: string,
    password: string,
  ): Promise<boolean> {
    return this.sendMail({
      to: email,
      subject: `Your Trading Account Has Been Approved – Golden Bubbles LLC`,
      template: 'verified',
      templateData: { firstName: firstname, username, password },
    });
  }

}
