import { pgTable, text, uuid, date } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").primaryKey(),
  username: text("username").unique().notNull(),
  email: text("email").unique().notNull(),
  password: text("password").notNull(),
  pgpkey: text("pgpkey").notNull(),
  createdAt: date("created_at").notNull(),
  updatedAt: date("updated_at").notNull(),
});
