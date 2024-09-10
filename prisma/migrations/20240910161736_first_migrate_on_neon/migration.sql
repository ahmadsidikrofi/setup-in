-- CreateTable
CREATE TABLE "Peripherals" (
    "id" SERIAL NOT NULL,
    "nama_peripheral" VARCHAR(255) NOT NULL,
    "slug" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "harga" DOUBLE PRECISION NOT NULL,
    "categories" VARCHAR(155) NOT NULL,
    "image" TEXT,
    "store_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Peripherals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cart" (
    "id" SERIAL NOT NULL,
    "id_peripherals" INTEGER NOT NULL,
    "user_email" VARCHAR(255) NOT NULL,
    "nama_peripheral" VARCHAR(255) NOT NULL,
    "slug" TEXT NOT NULL,
    "harga" DOUBLE PRECISION NOT NULL,
    "categories" VARCHAR(155) NOT NULL,
    "image" TEXT,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Store" (
    "id" SERIAL NOT NULL,
    "nama_toko" TEXT NOT NULL,
    "slug" TEXT,
    "deskripsi" TEXT,
    "telp" TEXT,
    "user_email" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Store_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Orders" (
    "id" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "total_harga" DOUBLE PRECISION NOT NULL,
    "token" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderPeripheral" (
    "id" SERIAL NOT NULL,
    "orderId" TEXT NOT NULL,
    "peripheralId" INTEGER NOT NULL,
    "storeId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OrderPeripheral_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Peripherals_slug_key" ON "Peripherals"("slug");

-- CreateIndex
CREATE INDEX "Peripherals_store_id_nama_peripheral_slug_idx" ON "Peripherals"("store_id", "nama_peripheral", "slug");

-- CreateIndex
CREATE UNIQUE INDEX "Cart_slug_user_email_key" ON "Cart"("slug", "user_email");

-- CreateIndex
CREATE UNIQUE INDEX "Store_slug_key" ON "Store"("slug");

-- CreateIndex
CREATE INDEX "Store_user_email_slug_idx" ON "Store"("user_email", "slug");

-- CreateIndex
CREATE INDEX "Orders_user_email_idx" ON "Orders"("user_email");

-- CreateIndex
CREATE INDEX "OrderPeripheral_orderId_peripheralId_storeId_idx" ON "OrderPeripheral"("orderId", "peripheralId", "storeId");

-- AddForeignKey
ALTER TABLE "Peripherals" ADD CONSTRAINT "Peripherals_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "Store"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderPeripheral" ADD CONSTRAINT "OrderPeripheral_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderPeripheral" ADD CONSTRAINT "OrderPeripheral_peripheralId_fkey" FOREIGN KEY ("peripheralId") REFERENCES "Peripherals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderPeripheral" ADD CONSTRAINT "OrderPeripheral_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
