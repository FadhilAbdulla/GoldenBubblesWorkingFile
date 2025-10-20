export class CreateAuthDto {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    phone: string;
}

export class DocumentUploadDto {
    documents: {
        passport?: Express.Multer.File;
        emirates_id?: Express.Multer.File;
        proof_of_address?: Express.Multer.File;
    };
}
