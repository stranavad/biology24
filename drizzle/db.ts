import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema';

// Disable prefetch as it is not supported for "Transaction" pool mode
const client = postgres("postgresql://postgres:mcOKbqKvDvaj0F1J@db.dnkztosfwngvhwoallol.supabase.co:5432/postgres", { prepare: false })
export const db = drizzle(client, {schema});
