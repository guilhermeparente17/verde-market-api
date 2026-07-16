/*
  Warnings:

  - A unique constraint covering the columns `[userId,productId]` on the table `Favorities` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Favorities_userId_productId_key" ON "Favorities"("userId", "productId");
