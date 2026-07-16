/*
  Warnings:

  - Added the required column `exchangeDays` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "exchangeDays" INTEGER NOT NULL,
ADD COLUMN     "freeShipping" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "replacement" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "securePurchase" BOOLEAN NOT NULL DEFAULT false;
