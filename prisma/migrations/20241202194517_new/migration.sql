/*
  Warnings:

  - You are about to drop the column `imaages` on the `Room` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Room" DROP COLUMN "imaages",
ADD COLUMN     "images" TEXT[];
