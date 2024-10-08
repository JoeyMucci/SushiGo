-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
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
    "speedrunStart" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "bestSpeedrun" INTEGER NOT NULL DEFAULT -1,
    "hashedPassword" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "resetToken" TEXT,
    "resetTokenExpiresAt" TIMESTAMP(3),
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

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");
