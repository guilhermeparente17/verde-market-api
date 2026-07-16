-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "freeShipping" DROP NOT NULL,
ALTER COLUMN "replacement" DROP NOT NULL,
ALTER COLUMN "securePurchase" DROP NOT NULL;
