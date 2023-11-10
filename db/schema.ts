import { date, pgTable, serial, text, uniqueIndex } from 'drizzle-orm/pg-core';

export const birhdays = pgTable(
    'birhdays',
    {
        id: serial('id').primaryKey(),
        name: text('name'),
        userId: text('user_id').notNull(),
        serverId: text('server_id').notNull(),
        birthday: date('birthday').notNull()
    },
    (table) => {
        return {
            pk: uniqueIndex('user_server').on(table.userId, table.serverId)
        };
    }
);
