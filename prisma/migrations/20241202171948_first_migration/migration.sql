-- CreateEnum
CREATE TYPE "RoomType" AS ENUM ('SINGLE', 'DOUBLE', 'FAMILY');

-- CreateEnum
CREATE TYPE "RoomStatus" AS ENUM ('AVAILABLE', 'OCCUPIED', 'MAINTAINANCE');

-- CreateEnum
CREATE TYPE "BookingStatus" AS ENUM ('CONFIRMED', 'CANCELLED', 'COMPLETED');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'PAID', 'REFUND');

-- CreateTable
CREATE TABLE "Guest" (
    "Id" TEXT NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "phoneNumber" TEXT,
    "dateofBirth" TIMESTAMP(3) NOT NULL,
    "nationality" TEXT,
    "passportNumber" TEXT,

    CONSTRAINT "Guest_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Room" (
    "Id" TEXT NOT NULL,
    "room_number" TEXT NOT NULL,
    "room_type" "RoomType" NOT NULL DEFAULT 'SINGLE',
    "max_occupancy" INTEGER NOT NULL,
    "basePrice" INTEGER NOT NULL,
    "status" "RoomStatus" NOT NULL DEFAULT 'AVAILABLE',
    "description" TEXT,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Bookings" (
    "Id" TEXT NOT NULL,
    "guestId" TEXT NOT NULL,
    "roomId" TEXT NOT NULL,
    "check_in_date" TIMESTAMP(3) NOT NULL,
    "check_out_date" TIMESTAMP(3) NOT NULL,
    "totalPrice" DECIMAL(65,30) NOT NULL,
    "booking_status" "BookingStatus" NOT NULL DEFAULT 'CONFIRMED',
    "number_of_guests" INTEGER NOT NULL,
    "payment_status" "PaymentStatus" NOT NULL DEFAULT 'PENDING',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Bookings_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Guest_email_key" ON "Guest"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Room_room_number_key" ON "Room"("room_number");

-- AddForeignKey
ALTER TABLE "Bookings" ADD CONSTRAINT "Bookings_guestId_fkey" FOREIGN KEY ("guestId") REFERENCES "Guest"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookings" ADD CONSTRAINT "Bookings_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
