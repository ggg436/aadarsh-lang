ALTER TABLE "courses" ALTER COLUMN "language_code" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "challenges" ADD COLUMN "language_code" text;