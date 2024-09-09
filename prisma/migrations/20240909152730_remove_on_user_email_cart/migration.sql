/*
  Warnings:

  - Made the column `user_email` on table `cart` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `cart` MODIFY `user_email` VARCHAR(255) NOT NULL;
