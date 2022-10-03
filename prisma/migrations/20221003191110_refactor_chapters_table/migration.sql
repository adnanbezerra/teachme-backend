/*
  Warnings:

  - You are about to drop the column `chapterId` on the `chapters` table. All the data in the column will be lost.
  - You are about to drop the column `subchapterToId` on the `chapters` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "chapters" DROP CONSTRAINT "chapters_chapterId_fkey";

-- AlterTable
ALTER TABLE "chapters" DROP COLUMN "chapterId",
DROP COLUMN "subchapterToId";
