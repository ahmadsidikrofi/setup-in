-- CreateTable
CREATE TABLE `Peripherals` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_peripheral` VARCHAR(255) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `deskripsi` TEXT NOT NULL,
    `harga` DOUBLE NOT NULL,
    `categories` VARCHAR(155) NOT NULL,
    `image` TEXT NULL,
    `store_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Peripherals_slug_key`(`slug`),
    INDEX `Peripherals_store_id_nama_peripheral_slug_idx`(`store_id`, `nama_peripheral`, `slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cart` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_peripherals` INTEGER NOT NULL,
    `user_email` VARCHAR(255) NULL,
    `nama_peripheral` VARCHAR(255) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `harga` DOUBLE NOT NULL,
    `categories` VARCHAR(155) NOT NULL,
    `image` TEXT NULL,

    UNIQUE INDEX `Cart_slug_user_email_key`(`slug`, `user_email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Store` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_toko` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NULL,
    `deskripsi` TEXT NULL,
    `telp` VARCHAR(191) NULL,
    `user_email` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Store_slug_key`(`slug`),
    INDEX `Store_user_email_slug_idx`(`user_email`, `slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Orders` (
    `id` VARCHAR(191) NOT NULL,
    `user_email` VARCHAR(191) NOT NULL,
    `total_harga` DOUBLE NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `Orders_user_email_idx`(`user_email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OrderPeripheral` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `orderId` VARCHAR(191) NOT NULL,
    `peripheralId` INTEGER NOT NULL,
    `storeId` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `OrderPeripheral_orderId_peripheralId_storeId_idx`(`orderId`, `peripheralId`, `storeId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Peripherals` ADD CONSTRAINT `Peripherals_store_id_fkey` FOREIGN KEY (`store_id`) REFERENCES `Store`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderPeripheral` ADD CONSTRAINT `OrderPeripheral_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Orders`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderPeripheral` ADD CONSTRAINT `OrderPeripheral_peripheralId_fkey` FOREIGN KEY (`peripheralId`) REFERENCES `Peripherals`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderPeripheral` ADD CONSTRAINT `OrderPeripheral_storeId_fkey` FOREIGN KEY (`storeId`) REFERENCES `Store`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
