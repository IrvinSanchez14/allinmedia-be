import connectDb from "../config/db";

export const taskModel = async () => {
  const db = await connectDb();
  await db.exec('CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY, title TEXT NOT NULL, completed INTEGER NOT NULL, date_created DATETIME DEFAULT CURRENT_TIMESTAMP)');
  return db;
};
