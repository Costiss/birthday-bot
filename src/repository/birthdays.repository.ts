import { sql } from 'drizzle-orm';
import { db } from '../../db/db';
import { birhdays } from '../../db/schema';

type Birthday = typeof birhdays.$inferSelect;

async function findTodayBirthdays(): Promise<Birthday[]> {
    const statement = sql`select * from ${birhdays} where
     EXTRACT(DAY FROM birthday) = EXTRACT(DAY FROM CURRENT_DATE) and 
     EXTRACT(MONTH FROM birthday) = EXTRACT(MONTH FROM CURRENT_DATE)`;

    const birthdays = await db.execute(statement);
    return birthdays.rows as Birthday[];
}

export default {
    findTodayBirthdays
};
