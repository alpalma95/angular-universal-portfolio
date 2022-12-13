-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "passwordConfirm" TEXT NOT NULL,
    "name" TEXT,
    "secret" TEXT
);
INSERT INTO "new_User" ("email", "id", "name", "password", "passwordConfirm", "secret") SELECT "email", "id", "name", "password", "passwordConfirm", "secret" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
