import { pgTable, unique, integer, varchar, timestamp, serial, text, bigint, uuid, boolean } from "drizzle-orm/pg-core"

export const group = pgTable("group", {
	id: serial("id").primaryKey(),
	name: varchar("name").notNull(),
	createdAt: timestamp("createdAt", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
},
(table) => {
	return {
		groupNameKey: unique("group_name_key").on(table.name),
	}
});

export const animal = pgTable("animal", {
	id: serial("id").primaryKey(),
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
	id: serial("id").primaryKey(),
	userId: uuid("userId").notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	animalId: bigint("animalId", { mode: "number" }).notNull().references(() => animal.id, { onDelete: "cascade" } ),
	correct: boolean("correct").notNull(),
});