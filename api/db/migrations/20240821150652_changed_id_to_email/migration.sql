/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "email" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "easyScore" INTEGER,
    "easyDessert" INTEGER,
    "normalScore" INTEGER,
    "normalDessert" INTEGER,
    "hardScore" INTEGER,
    "hardDessert" INTEGER,
    "toxicScore" INTEGER,
    "toxicDessert" INTEGER,
    "speedrunStart" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "bestSpeedrun" DATETIME,
    "hashedPassword" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "resetToken" TEXT,
    "resetTokenExpiresAt" DATETIME
);
INSERT INTO "new_User" ("bestSpeedrun", "easyDessert", "easyScore", "email", "hardDessert", "hardScore", "hashedPassword", "name", "normalDessert", "normalScore", "resetToken", "resetTokenExpiresAt", "salt", "speedrunStart", "toxicDessert", "toxicScore") SELECT "bestSpeedrun", "easyDessert", "easyScore", "email", "hardDessert", "hardScore", "hashedPassword", "name", "normalDessert", "normalScore", "resetToken", "resetTokenExpiresAt", "salt", "speedrunStart", "toxicDessert", "toxicScore" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");
PRAGMA foreign_key_check("User");
PRAGMA foreign_keys=ON;
