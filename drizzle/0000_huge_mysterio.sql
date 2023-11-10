CREATE TABLE IF NOT EXISTS "birhdays" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text,
	"server_id" text,
	"birthday" date
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "user_server" ON "birhdays" ("user_id","server_id");