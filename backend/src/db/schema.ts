import { integer, real, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const categoriesTable = sqliteTable("categories", {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description').notNull(),
  image: text('image'),
});

export const productsTable = sqliteTable("products", {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  price: real('price').notNull(),
  category: integer('category')
    .notNull()
    .references(() => categoriesTable.id, { onDelete: 'set null' }),
  description: text('description').notNull(),
  image: text('image'),
});