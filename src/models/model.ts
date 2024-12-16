import { pgTable, text, uuid, timestamp } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm/sql";

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  username: text("username").unique().notNull(),
  email: text("email").unique().notNull(),
  password: text("password").notNull(),
  publicpgpkey: text("publicpgpkey"),
  secretpgpkey: text("secletpgpkey"),
  createdAt: timestamp("created_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdateFn(() => sql`CURRENT_TIMESTAMP`),
});
