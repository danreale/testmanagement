import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

export const pool = new Pool({
  host: process.env.DB_HOST || "0.0.0.0",
  port: parseInt(process.env.DB_PORT || "5432"),
  user: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  database: process.env.DB_NAME || "postgres",
});

export const connectToDB = async () => {
  try {
    await pool.connect();
    console.log("Database is connected!");
  } catch (err) {
    console.log(err);
  }
};
