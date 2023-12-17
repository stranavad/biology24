import {
	pgTable,
	unique,
	pgEnum,
	integer,
	varchar,
	timestamp,
	foreignKey,
	text,
	bigint,
	uuid,
	boolean,
	serial
} from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"

export const keyStatus = pgEnum("key_status", ['default', 'valid', 'invalid', 'expired'])
export const keyType = pgEnum("key_type", ['aead-ietf', 'aead-det', 'hmacsha512', 'hmacsha256', 'auth', 'shorthash', 'generichash', 'kdf', 'secretbox', 'secretstream', 'stream_xchacha20'])
export const factorType = pgEnum("factor_type", ['totp', 'webauthn'])
export const factorStatus = pgEnum("factor_status", ['unverified', 'verified'])
export const aalLevel = pgEnum("aal_level", ['aal1', 'aal2', 'aal3'])
export const codeChallengeMethod = pgEnum("code_challenge_method", ['s256', 'plain'])


export const group = pgTable("group", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name").notNull(),
	createdAt: timestamp("createdAt", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
},
(table) => {
	return {
		groupNameKey: unique("group_name_key").on(table.name),
	}
});

export const animal = pgTable("animal", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name").notNull(),
	photo: text("photo"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	groupId: bigint("groupId", { mode: "number" }).references(() => group.id, { onDelete: "set null" } ),
},
(table) => {
	return {
		animalNameKey: unique("animal_name_key").on(table.name),
	}
});

export const usersPublic = pgTable("users_public", {
	id: serial("id").primaryKey(),
	nickname: varchar("nickname").notNull(),
	points: integer("points").notNull(),
	userId: uuid("userId"),
},
(table) => {
	return {
		usersPublicUserIdKey: unique("users_public_userId_key").on(table.userId),
	}
});

export const history = pgTable("history", {
	id: serial("id").primaryKey().notNull(),
	userId: uuid("userId").notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	animalId: bigint("animalId", { mode: "number" }).notNull().references(() => animal.id, { onDelete: "cascade" } ),
	correct: boolean("correct").notNull(),
	createdAt: timestamp("createdAt", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
});
