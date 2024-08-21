/*
  Warnings:

  - You are about to drop the `Achievements` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Achievements";
PRAGMA foreign_keys=on;

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
    "resetTokenExpiresAt" DATETIME,
    "modestMaki" BOOLEAN NOT NULL DEFAULT false,
    "longTermPlayer" BOOLEAN NOT NULL DEFAULT false,
    "speedEater" BOOLEAN NOT NULL DEFAULT false,
    "forkForgetter" BOOLEAN NOT NULL DEFAULT false,
    "sushiThief" BOOLEAN NOT NULL DEFAULT false,
    "demandingCustomer" BOOLEAN NOT NULL DEFAULT false,
    "leftoverLover" BOOLEAN NOT NULL DEFAULT false,
    "wasabiWarrior" BOOLEAN NOT NULL DEFAULT false,
    "teaTime" BOOLEAN NOT NULL DEFAULT false,
    "soysauceSavant" BOOLEAN NOT NULL DEFAULT false,
    "goingForSeconds" BOOLEAN NOT NULL DEFAULT false,
    "dumplingDisciple" BOOLEAN NOT NULL DEFAULT false,
    "tempuraTitan" BOOLEAN NOT NULL DEFAULT false,
    "sashimiSensei" BOOLEAN NOT NULL DEFAULT false,
    "misoMaster" BOOLEAN NOT NULL DEFAULT false,
    "edamameExpert" BOOLEAN NOT NULL DEFAULT false,
    "unlikelyFriendship" BOOLEAN NOT NULL DEFAULT false,
    "onigiriGuru" BOOLEAN NOT NULL DEFAULT false,
    "greenTeaEightCream" BOOLEAN NOT NULL DEFAULT false,
    "fruitFiend" BOOLEAN NOT NULL DEFAULT false,
    "sushiLow" BOOLEAN NOT NULL DEFAULT false,
    "flashOfBrilliance" BOOLEAN NOT NULL DEFAULT false,
    "headChef" BOOLEAN NOT NULL DEFAULT false,
    "easyClear" BOOLEAN NOT NULL DEFAULT false,
    "normalClear" BOOLEAN NOT NULL DEFAULT false,
    "hardClear" BOOLEAN NOT NULL DEFAULT false,
    "makiClear" BOOLEAN NOT NULL DEFAULT false,
    "temakiClear" BOOLEAN NOT NULL DEFAULT false,
    "uramakiClear" BOOLEAN NOT NULL DEFAULT false,
    "chopsticksClear" BOOLEAN NOT NULL DEFAULT false,
    "spoonClear" BOOLEAN NOT NULL DEFAULT false,
    "menuClear" BOOLEAN NOT NULL DEFAULT false,
    "takeoutBoxClear" BOOLEAN NOT NULL DEFAULT false,
    "wasabiClear" BOOLEAN NOT NULL DEFAULT false,
    "teaClear" BOOLEAN NOT NULL DEFAULT false,
    "soysauceClear" BOOLEAN NOT NULL DEFAULT false,
    "specialOrderClear" BOOLEAN NOT NULL DEFAULT false,
    "dumplingClear" BOOLEAN NOT NULL DEFAULT false,
    "tempuraClear" BOOLEAN NOT NULL DEFAULT false,
    "sashimiClear" BOOLEAN NOT NULL DEFAULT false,
    "misoSoupClear" BOOLEAN NOT NULL DEFAULT false,
    "edamameClear" BOOLEAN NOT NULL DEFAULT false,
    "eelClear" BOOLEAN NOT NULL DEFAULT false,
    "tofuClear" BOOLEAN NOT NULL DEFAULT false,
    "onigiriClear" BOOLEAN NOT NULL DEFAULT false,
    "puddingClear" BOOLEAN NOT NULL DEFAULT false,
    "gticClear" BOOLEAN NOT NULL DEFAULT false,
    "fruitClear" BOOLEAN NOT NULL DEFAULT false,
    "maturePalate" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_User" ("bestSpeedrun", "easyDessert", "easyScore", "email", "hardDessert", "hardScore", "hashedPassword", "name", "normalDessert", "normalScore", "resetToken", "resetTokenExpiresAt", "salt", "speedrunStart", "toxicDessert", "toxicScore") SELECT "bestSpeedrun", "easyDessert", "easyScore", "email", "hardDessert", "hardScore", "hashedPassword", "name", "normalDessert", "normalScore", "resetToken", "resetTokenExpiresAt", "salt", "speedrunStart", "toxicDessert", "toxicScore" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");
PRAGMA foreign_key_check("User");
PRAGMA foreign_keys=ON;
