import * as schema from './schema';
import { drizzle } from 'drizzle-orm/neon-http';
import {neon} from "@neondatabase/serverless";

const {dbUrl} = useRuntimeConfig();
const sql = neon(dbUrl);
export const db = drizzle(sql, {schema});
