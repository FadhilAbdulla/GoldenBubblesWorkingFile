-- CreateTable
CREATE TABLE "public"."ark_auth_token" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ark_auth_token_pkey" PRIMARY KEY ("id")
);
