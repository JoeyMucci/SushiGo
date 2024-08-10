/*
  Warnings:

  - You are about to drop the column `userId` on the `Achievements` table. All the data in the column will be lost.
  - Added the required column `userEmail` to the `Achievements` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Achievements" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userEmail" TEXT NOT NULL,
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
    CONSTRAINT "Achievements_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User" ("email") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Achievements" ("demandingCustomer", "dumplingDisciple", "edamameExpert", "flashOfBrilliance", "forkForgetter", "fruitFiend", "goingForSeconds", "greenTeaEightCream", "headChef", "id", "leftoverLover", "longTermPlayer", "maturePalate", "misoMaster", "modestMaki", "onigiriGuru", "sashimiSensei", "seasonedCompetitor", "soysauceSavant", "speedEater", "sushiLow", "sushiThief", "teaTime", "tempuraTitan", "unlikelyFriendship", "wasabiWarrior") SELECT "demandingCustomer", "dumplingDisciple", "edamameExpert", "flashOfBrilliance", "forkForgetter", "fruitFiend", "goingForSeconds", "greenTeaEightCream", "headChef", "id", "leftoverLover", "longTermPlayer", "maturePalate", "misoMaster", "modestMaki", "onigiriGuru", "sashimiSensei", "seasonedCompetitor", "soysauceSavant", "speedEater", "sushiLow", "sushiThief", "teaTime", "tempuraTitan", "unlikelyFriendship", "wasabiWarrior" FROM "Achievements";
DROP TABLE "Achievements";
ALTER TABLE "new_Achievements" RENAME TO "Achievements";
PRAGMA foreign_key_check("Achievements");
PRAGMA foreign_keys=ON;
