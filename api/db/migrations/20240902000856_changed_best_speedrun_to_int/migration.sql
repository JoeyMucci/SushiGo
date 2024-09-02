/*
  Warnings:

  - You are about to alter the column `bestSpeedrun` on the `User` table. The data in that column could be lost. The data in that column will be cast from `DateTime` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "easyScore" INTEGER NOT NULL DEFAULT -999,
    "easyDessert" INTEGER NOT NULL DEFAULT -999,
    "normalScore" INTEGER NOT NULL DEFAULT -999,
    "normalDessert" INTEGER NOT NULL DEFAULT -999,
    "hardScore" INTEGER NOT NULL DEFAULT -999,
    "hardDessert" INTEGER NOT NULL DEFAULT -999,
    "toxicScore" INTEGER NOT NULL DEFAULT -999,
    "toxicDessert" INTEGER NOT NULL DEFAULT -999,
    "speedrunStart" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "bestSpeedrun" INTEGER,
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
    "fruitClear" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_User" ("bestSpeedrun", "chopsticksClear", "demandingCustomer", "dumplingClear", "dumplingDisciple", "easyClear", "easyDessert", "easyScore", "edamameClear", "edamameExpert", "eelClear", "email", "flashOfBrilliance", "forkForgetter", "fruitClear", "fruitFiend", "goingForSeconds", "greenTeaEightCream", "gticClear", "hardClear", "hardDessert", "hardScore", "hashedPassword", "headChef", "id", "leftoverLover", "longTermPlayer", "makiClear", "menuClear", "misoMaster", "misoSoupClear", "modestMaki", "name", "normalClear", "normalDessert", "normalScore", "onigiriClear", "onigiriGuru", "puddingClear", "resetToken", "resetTokenExpiresAt", "salt", "sashimiClear", "sashimiSensei", "soysauceClear", "soysauceSavant", "specialOrderClear", "speedEater", "speedrunStart", "spoonClear", "sushiLow", "sushiThief", "takeoutBoxClear", "teaClear", "teaTime", "temakiClear", "tempuraClear", "tempuraTitan", "tofuClear", "toxicDessert", "toxicScore", "unlikelyFriendship", "uramakiClear", "wasabiClear", "wasabiWarrior") SELECT "bestSpeedrun", "chopsticksClear", "demandingCustomer", "dumplingClear", "dumplingDisciple", "easyClear", "easyDessert", "easyScore", "edamameClear", "edamameExpert", "eelClear", "email", "flashOfBrilliance", "forkForgetter", "fruitClear", "fruitFiend", "goingForSeconds", "greenTeaEightCream", "gticClear", "hardClear", "hardDessert", "hardScore", "hashedPassword", "headChef", "id", "leftoverLover", "longTermPlayer", "makiClear", "menuClear", "misoMaster", "misoSoupClear", "modestMaki", "name", "normalClear", "normalDessert", "normalScore", "onigiriClear", "onigiriGuru", "puddingClear", "resetToken", "resetTokenExpiresAt", "salt", "sashimiClear", "sashimiSensei", "soysauceClear", "soysauceSavant", "specialOrderClear", "speedEater", "speedrunStart", "spoonClear", "sushiLow", "sushiThief", "takeoutBoxClear", "teaClear", "teaTime", "temakiClear", "tempuraClear", "tempuraTitan", "tofuClear", "toxicDessert", "toxicScore", "unlikelyFriendship", "uramakiClear", "wasabiClear", "wasabiWarrior" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");
PRAGMA foreign_key_check("User");
PRAGMA foreign_keys=ON;
