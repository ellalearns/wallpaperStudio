import * as SQLite from "expo-sqlite"
import * as Crypto from "expo-crypto"

const DB_NAME = "faveWalls"

let db: SQLite.SQLiteDatabase | null = null

export const getDB = async () => {
    if (!db) {
        db = await SQLite.openDatabaseAsync(DB_NAME)
    }
    return db
}

export const createFaveTable = async () => {
    const db = await getDB()

    await db.execAsync(`
        CREATE TABLE IF NOT EXISTS FAVES (
            id TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            catName TEXT NOT NULL,
            key TEXT NOT NULL,
        )
    `)
}

export const getAllFaves = async () => {
    const db = await getDB()

    const products = await db.getAllAsync(
        `SELECT * FROM FAVES`
    )

    return products
}

export const addNewFave = async ({ ...fave }) => {

    const id = Crypto.randomUUID()

    const db = await getDB()

    await db.runAsync(
        `INSERT INTO FAVES (
            id, name, catName, key
        ) VALUES (?, ?, ?, ?)`,
        [
            id,
            fave.name,
            fave.catName,
            fave.key
        ]
    )
}

export const deleteFave = async(id: string) => {
    const db = await getDB()

    await db.runAsync(
        `DELETE FROM FAVES WHERE key = ?`,
        [id]
    )
}
