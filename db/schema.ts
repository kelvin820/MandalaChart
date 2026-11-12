import {
  sqliteTable,
  text,
  integer,
  index,
  primaryKey,
} from "drizzle-orm/sqlite-core";
export const charts = sqliteTable(
  "mandala_charts",
  {
    id: text("id").notNull(),
    owner: text("owner").notNull(),
    revision: integer("revision").notNull(),
    payload: text("payload").notNull(),
    updatedAt: text("updated_at").notNull(),
  },
  (t) => [
    primaryKey({ columns: [t.owner, t.id] }),
    index("mandala_charts_owner_updated").on(t.owner, t.updatedAt),
  ],
);
export const generations = sqliteTable(
  "mandala_generations",
  {
    id: text("id").notNull(),
    owner: text("owner").notNull(),
    createdAt: integer("created_at").notNull(),
    payload: text("payload").notNull(),
  },
  (t) => [
    primaryKey({ columns: [t.owner, t.id] }),
    index("mandala_generations_owner_created").on(t.owner, t.createdAt),
  ],
);
