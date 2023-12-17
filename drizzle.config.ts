import { defineConfig } from 'drizzle-kit'

export default defineConfig({
    schema: "./drizzle/schema.ts",
    driver: 'pg',
    dbCredentials: {
        connectionString: process.env.NUXT_DB_URL,
    },
    verbose: true,
    strict: true,
})
