-- CreateEnum
CREATE TYPE "AccountRole" AS ENUM ('USER', 'ADMIN');

-- AlterTable
ALTER TABLE "Guest" ADD COLUMN     "accountRole" "AccountRole" NOT NULL DEFAULT 'USER';

-- AlterTable
ALTER TABLE "Room" ADD COLUMN     "imaages" TEXT[];
