/*
  Warnings:

  - Made the column `lastupdated` on table `ArkAuthToken` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."ArkAuthToken" ALTER COLUMN "lastupdated" SET NOT NULL,
ALTER COLUMN "lastupdated" SET DEFAULT CURRENT_TIMESTAMP;
