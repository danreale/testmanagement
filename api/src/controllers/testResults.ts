import { Request, Response } from "express";
import { pool } from "../db";

export const get = async (_req: Request, res: Response) => {
  pool.query("SELECT * FROM testresults", (error, results) => {
    if (error) {
      res.status(404).send({ message: error });
    }
    res.status(200).json(results.rows);
  });
};
