ALTER TABLE "users" ALTER COLUMN "pgpkey" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "pgpkey" SET NOT NULL;