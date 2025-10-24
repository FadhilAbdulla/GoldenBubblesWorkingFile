/*
  Warnings:

  - You are about to drop the `ark_auth_token` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."ark_auth_token";

-- CreateTable
CREATE TABLE "public"."ArkAuthToken" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ArkAuthToken_pkey" PRIMARY KEY ("id")
);
