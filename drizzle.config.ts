import { defineConfig } from 'drizzle-kit'

export default defineConfig({
    schema: "./schema.ts",
    driver: 'pg',
    dbCredentials: {
        connectionString: "postgresql://postgres:mcOKbqKvDvaj0F1J@db.dnkztosfwngvhwoallol.supabase.co:5432/postgres",
    },
    verbose: true,
    strict: true,
})