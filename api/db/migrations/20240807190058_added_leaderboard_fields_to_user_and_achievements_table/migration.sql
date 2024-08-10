/*
  Warnings:

  - Added the required column `bestSpeedrun` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `easyDessert` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `easyScore` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hardDessert` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hardScore` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `normalDessert` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `normalScore` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `speedrunStart` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `toxicDessert` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `toxicScore` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Achievements" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "modestMaki" BOOLEAN NOT NULL,
    "longTermPlayer" BOOLEAN NOT NULL,
    "speedEater" BOOLEAN NOT NULL,
    "forkForgetter" BOOLEAN NOT NULL,
    "sushiThief" BOOLEAN NOT NULL,
    "demandingCustomer" BOOLEAN NOT NULL,
    "leftoverLover" BOOLEAN NOT NULL,
    "wasabiWarrior" BOOLEAN NOT NULL,
    "teaTime" BOOLEAN NOT NULL,
    "soysauceSavant" BOOLEAN NOT NULL,
    "goingForSeconds" BOOLEAN NOT NULL,
    "dumplingDisciple" BOOLEAN NOT NULL,
    "tempuraTitan" BOOLEAN NOT NULL,
    "sashimiSensei" BOOLEAN NOT NULL,
    "misoMaster" BOOLEAN NOT NULL,
    "edamameExpert" BOOLEAN NOT NULL,
    "unlikelyFriendship" BOOLEAN NOT NULL,
    "onigiriGuru" BOOLEAN NOT NULL,
    "greenTeaEightCream" BOOLEAN NOT NULL,
    "fruitFiend" BOOLEAN NOT NULL,
    "sushiLow" BOOLEAN NOT NULL,
    "flashOfBrilliance" BOOLEAN NOT NULL,
    "headChef" BOOLEAN NOT NULL,
    "seasonedCompetitor" BOOLEAN NOT NULL,
    "maturePalate" BOOLEAN NOT NULL,
    CONSTRAINT "Achievements_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "easyScore" INTEGER NOT NULL,
    "easyDessert" INTEGER NOT NULL,
    "normalScore" INTEGER NOT NULL,
    "normalDessert" INTEGER NOT NULL,
    "hardScore" INTEGER NOT NULL,
    "hardDessert" INTEGER NOT NULL,
    "toxicScore" INTEGER NOT NULL,
    "toxicDessert" INTEGER NOT NULL,
    "speedrunStart" DATETIME NOT NULL,
    "bestSpeedrun" DATETIME NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "resetToken" TEXT,
    "resetTokenExpiresAt" DATETIME
);
INSERT INTO "new_User" ("email", "hashedPassword", "id", "name", "resetToken", "resetTokenExpiresAt", "salt") SELECT "email", "hashedPassword", "id", "name", "resetToken", "resetTokenExpiresAt", "salt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");
PRAGMA foreign_key_check("User");
PRAGMA foreign_keys=ON;
