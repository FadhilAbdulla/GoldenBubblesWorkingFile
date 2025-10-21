// import { Injectable } from '@nestjs/common';
// import { S3 } from '@aws-sdk/client-s3';
// import { v4 as uuid } from 'uuid';
// import { extname } from 'path';
// import { AwsBucketHirarchy } from 'src/constants/constant';
// import { DatabaseService } from 'src/database/database.service';

// @Injectable()
// export class AwsService {
//     constructor(
//         private readonly databaseService: DatabaseService,
//     ) { }

//     private awsImageConf = {
//         cacheControll: 'max-age=31536000,public',
//     }


//     private s3 = new S3({
//         region: 'us-east-1',
//         credentials: {
//             accessKeyId: process.env.AWS_ACCESS_ID, // Your AWS Access Key ID
//             secretAccessKey: process.env.AWS_SECRET_KEY, // Your AWS Secret Access Key
//         },
//     });

//     private recognition = new RekognitionClient({
//         region: 'us-east-1', // e.g., "us-east-1"
//         credentials: {
//             accessKeyId: process.env.AWS_ACCESS_ID, // Your AWS Access Key ID
//             secretAccessKey: process.env.AWS_SECRET_KEY, // Your AWS Secret Access Key
//         },
//     });



//     async uploadFile(file: Express.Multer.File, Identifier: string) {
//         const uniqueName = `${Date.now()}-${uuid()}${extname(file.originalname)}`;
//         const params = {
//             Bucket: process.env.AWS_BUCKET_NAME,
//             Key: `${process.env.AWS_S3_PRIMARY_FOLDER}/${Identifier}/${uniqueName}`,
//             Body: file.buffer,
//             ContentType: file.mimetype,
//             CacheControl: this.awsImageConf.cacheControll,
//         };

//         try {
//             // console.log(file.buffer);

//             const data = await this.s3.putObject(params); // Changed to putObject for simplicity
//             // console.log(data);
//             console.log(`File uploaded successfully. ETag: ${data.ETag}`);
//             return { success: true, key: uniqueName, originalKey: file.originalname };
//         } catch (error) {
//             console.error('Error uploading file:', error);
//             return { success: false };
//         }
//     }
//     async uploadCompressedFile(file: Buffer, type, key: string) {
//         const params = {
//             Bucket: process.env.AWS_BUCKET_NAME,
//             Key: `${process.env.AWS_S3_PRIMARY_FOLDER}/${AwsBucketHirarchy.image}/${key}`,
//             Body: file,
//             ContentType: type,
//             CacheControl: this.awsImageConf.cacheControll,
//         };
//         try {
//             const data = await this.s3.putObject(params); // Changed to putObject for simplicity
//             // console.log(data);
//             console.log(`File uploaded successfully. ETag: ${data.ETag}`);
//             return { success: true };
//         } catch (error) {
//             console.error('Error uploading file:', error);
//             return { success: false };
//         }
//     }

//     async createCollection(collectionName: string): Promise<boolean> {
//         try {
//             const command = new CreateCollectionCommand({
//                 CollectionId: collectionName,
//             });
//             const response = await this.recognition.send(command);
//             console.log(
//                 `Collection "${collectionName}" created. Status code: ${response.StatusCode}`,
//             );
//             return response.StatusCode === 200;
//         } catch (error) {
//             console.error('Error creating collection:', error);
//             return false;
//         }
//     }

//     async addFaceToCollection(collectionId: string, path: string, imageName: string) {
//         try {
//             const command = new IndexFacesCommand({
//                 CollectionId: collectionId,
//                 Image: {
//                     S3Object: {
//                         Bucket: process.env.AWS_BUCKET_NAME,
//                         Name: `${path}/${imageName}`,
//                     },
//                 },
//                 ExternalImageId: imageName,
//                 DetectionAttributes: [], // Add attributes like "ALL" if you want age range, emotion, etc.
//             });
//             const response = await this.recognition.send(command);
//             return { faceCount: response.FaceRecords?.length ?? 0 };
//         } catch (error) {
//             console.error('Error indexing face:', error);
//             return false;
//         }
//     }

//     async listCollections(): Promise<string[]> {
//         try {
//             const command = new ListCollectionsCommand({});
//             const response = await this.recognition.send(command);

//             const collections = response.CollectionIds || [];
//             console.log('Collections:', collections);
//             return collections;
//         } catch (error) {
//             console.error('Error fetching collections:', error);
//             return [];
//         }
//     }

//     async deleteCollection(collectionId: string): Promise<boolean> {
//         try {
//             const command = new DeleteCollectionCommand({
//                 CollectionId: collectionId,
//             });

//             const response = await this.recognition.send(command);

//             if (response.StatusCode === 200) {
//                 console.log(`Collection "${collectionId}" deleted successfully.`);
//                 return true;
//             } else {
//                 console.error(`Failed to delete collection "${collectionId}".`);
//                 return false;
//             }
//         } catch (error) {
//             console.error(`Error deleting collection "${collectionId}":`, error);
//             return false;
//         }
//     }

//     async deleteAllCollections(): Promise<void> {
//         try {
//             const collections = await this.listCollections();

//             if (collections.length === 0) {
//                 console.log('No collections to delete.');
//                 return;
//             }

//             for (const collectionId of collections) {
//                 const success = await this.deleteCollection(collectionId);
//                 if (success) {
//                     console.log(`Deleted collection: ${collectionId}`);
//                 } else {
//                     console.log(`Failed to delete collection: ${collectionId}`);
//                 }
//             }

//             console.log('All collections deleted.');
//         } catch (error) {
//             console.error('Error deleting all collections:', error);
//         }
//     }

//     async searchFaceInCollection(key: string, collectionId: string, guest: boolean) {
//         console.log("Image Search Happend : ", key);

//         try {
//             const command = new SearchFacesByImageCommand({
//                 CollectionId: collectionId,
//                 Image: {
//                     S3Object: {
//                         Bucket: process.env.AWS_BUCKET_NAME,
//                         Name: `${process.env.AWS_S3_PRIMARY_FOLDER}/${guest ? AwsBucketHirarchy.guest : AwsBucketHirarchy.selfie}/${key}`,
//                     },
//                 },
//                 FaceMatchThreshold: 90,
//             });

//             const response = await this.recognition.send(command);
//             const res = response.FaceMatches?.map((match) => match.Face.ExternalImageId)

//             return res || [];
//         } catch (error) {

//             console.error('Error searching face in collection:', error);
//             return []
//         }
//     }

//     async s3GetObject(key: string) {
//         const params = {
//             Bucket: process.env.AWS_BUCKET_NAME,
//             Key: key,
//         };
//         try {
//             const data = await this.s3.getObject(params);
//             return data;
//         } catch (error) {
//             console.error('Error fetching file:', error);
//             return null;
//         }
//     }

//     async HandleImageScanUsingAws(groupId: number, selfieId: number, selfieGeneratedKey: string, guest: boolean = false) {
//         const lastFaceScan = await this.databaseService.image_scan.findMany({
//             where: { selfieId: selfieId, groupId: groupId }, orderBy: {
//                 createdAt: 'desc',

//             }, take: 1,
//         })
//         const lastUploadedImage = await this.databaseService.group_image.findMany({
//             where: { groupId: groupId }, orderBy: {
//                 createdAt: 'desc',
//             }, take: 1,
//         })

//         if (lastUploadedImage.length === 0) {
//             console.log("No image uploaded yet")
//             return []
//         }

//         if (lastFaceScan.length === 0 || lastFaceScan?.[0]?.createdAt < lastUploadedImage?.[0]?.createdAt) {
//             console.log("Face Scan Happened")
//             const AwsScanResp = await this.searchFaceInCollection(
//                 selfieGeneratedKey,
//                 String(groupId),
//                 guest
//             );

//             const newImageScan = await this.databaseService.image_scan.create({
//                 data: {
//                     selfieId: selfieId,
//                     groupId: groupId
//                 },
//             });

//             await Promise.all(
//                 AwsScanResp.map(async (dat) => {
//                     const imageId = await this.databaseService.image.findFirst({
//                         where: { generatedKey: dat },
//                     });

//                     if (imageId) {
//                         const existing = await this.databaseService.image_scanned.findFirst({
//                             where: {
//                                 imageId: imageId.id,
//                                 selfieId: selfieId,
//                             },
//                         });
//                         if (!existing) {
//                             await this.databaseService.image_scanned.create({
//                                 data: {
//                                     imageId: imageId.id,
//                                     selfieId: selfieId,
//                                     scanId: newImageScan.id,
//                                     groupId: groupId,
//                                 },
//                             });
//                         } else {
//                             console.log("Entry already exists");
//                         }
//                     }
//                 })
//             );
//         }

//         const allScannedImages = await this.databaseService.image_scanned.findMany({
//             where: { selfieId: selfieId, groupId: groupId },
//             include: { image: true },
//         })

//         return allScannedImages.map((it) => it.image.generatedKey)

//     }
// }