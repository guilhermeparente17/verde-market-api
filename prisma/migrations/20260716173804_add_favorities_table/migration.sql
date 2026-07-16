-- CreateTable
CREATE TABLE "Favorities" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "Favorities_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Favorities" ADD CONSTRAINT "Favorities_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorities" ADD CONSTRAINT "Favorities_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
