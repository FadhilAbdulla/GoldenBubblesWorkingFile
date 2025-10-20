import {
  Controller,
  Post,
  Body,
  Param,
  UseInterceptors,
  UploadedFiles,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { v4 as uuidv4 } from 'uuid';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('register')
  register(
    @Body()
    createAuthDto: {
      email: string;
      firstName: string;
      lastName: string;
      password: string;
      phone: string;
    },
  ) {
    return this.authService.register(createAuthDto);
  }

  @Post('upload-documents/:id')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'passport', maxCount: 1 },
        { name: 'emirates_id', maxCount: 1 },
        { name: 'proof_of_address', maxCount: 1 },
      ],
      {
        storage: diskStorage({
          destination: './uploads',
          filename: (req, file, callback) => {
            const uniqueSuffix = uuidv4();
            const ext = extname(file.originalname);
            const filename = `${file.fieldname}-${uniqueSuffix}${ext}`;
            callback(null, filename);
          },
        }),
        // fileFilter: (req, file, callback) => {
        //   if (!file.mimetype.match(/\/(jpg|jpeg|png|pdf)$/)) {
        //     return callback(
        //       new HttpException(
        //         'Only image files and PDFs are allowed!',
        //         HttpStatus.BAD_REQUEST,
        //       ),
        //       false,
        //     );
        //   }
        //   callback(null, true);
        // },
        limits: {
          fileSize: 50 * 1024 * 1024, // 5MB limit
        },
      },
    ),
  )
  documentUpload(
    @Param('id') id: string,
    @UploadedFiles()
    files: {
      passport?: Express.Multer.File[];
      emirates_id?: Express.Multer.File[];
      proof_of_address?: Express.Multer.File[];
    },
  ) {
    return this.authService.documentUpload(id, files);
  }
}
