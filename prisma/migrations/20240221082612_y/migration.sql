/*
  Warnings:

  - A unique constraint covering the columns `[nama]` on the table `makanan` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `makanan_nama_key` ON `makanan`(`nama`);
