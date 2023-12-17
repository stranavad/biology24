import {
	pgTable,
	unique,
	integer,
	varchar,
	timestamp,
	text,
	boolean,
	serial
} from "drizzle-orm/pg-core"
import {relations} from "drizzle-orm";

export const group = pgTable("group", {
	id: serial("id").primaryKey(),
	name: varchar("name", {length: 255}).notNull(),
	createdAt: timestamp("createdAt", {mode: 'string'}).defaultNow().notNull(),
});

export const groupRelations = relations(group, ({many}) => ({
	animals: many(animal)
}))

export const animal = pgTable("animal", {
	id: serial("id").primaryKey(),
	name: varchar("name", {length: 255}).notNull(),
	photo: text("photo"),
	groupId: integer("groupId").references(() => group.id),
});

export const animalRelations = relations(animal, ({one, many}) => ({
	group: one(group, {
		fields: [animal.groupId],
		references: [group.id]
	}),
	history: many(history)
}))

export const usersPublic = pgTable("users_public", {
	id: serial("id").primaryKey(),
	nickname: varchar("nickname").notNull(),
	points: integer("points").notNull(),
	userId: varchar("userId", {length: 255}).notNull(),
});

export const usersPublicRelations = relations(usersPublic, ({many}) => ({
	history: many(history)
}))

export const history = pgTable("history", {
	id: serial("id").primaryKey().notNull(),
	userId: varchar("userId", {length: 255}).notNull(),
	animalId: integer("animalId").notNull().references(() => animal.id, { onDelete: "cascade" } ),
	correct: boolean("correct").notNull(),
	createdAt: timestamp("createdAt", { mode: 'string' }).defaultNow().notNull(),
});

export const historyRelations = relations(history, ({one}) => ({
	user: one(usersPublic, {
		fields: [history.userId],
		references: [usersPublic.userId]
	}),
	animal: one(animal, {
		fields: [history.animalId],
		references: [animal.id]
	})
}))
