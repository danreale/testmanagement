import { Request, Response } from "express";
import { pool } from "../db";

// Pass, fail, skipped (counts and details, duration)

export const getUnitTestsToday = async (_req: Request, res: Response) => {
  pool.query(
    `SELECT test_type, status, count(status) FROM testresults
    where test_run_date > current_date
    and test_type = 'unit'
  group by test_type, status
  order by test_type, status asc`,
    (error, results) => {
      if (error) {
        res.status(404).send({ message: error });
      }
      res.status(200).json(results.rows);
    }
  );
};
export const getIntegrationTestsToday = async (
  _req: Request,
  res: Response
) => {
  pool.query(
    `SELECT test_type, status, count(status) FROM testresults
  where test_run_date > current_date
  and test_type = 'integration'
group by test_type, status
order by test_type, status asc`,
    (error, results) => {
      if (error) {
        res.status(404).send({ message: error });
      }
      res.status(200).json(results.rows);
    }
  );
};
export const getUITestsToday = async (_req: Request, res: Response) => {
  pool.query(
    `SELECT test_type, status, count(status) FROM testresults
  where test_run_date > current_date
  and test_type = 'ui'
group by test_type, status
order by test_type, status asc`,
    (error, results) => {
      if (error) {
        res.status(404).send({ message: error });
      }
      res.status(200).json(results.rows);
    }
  );
};

export const getUnitTestsWeek = async (_req: Request, res: Response) => {
  pool.query("SELECT * FROM testtypes", (error, results) => {
    if (error) {
      res.status(404).send({ message: error });
    }
    res.status(200).json(results.rows);
  });
};
export const getIntegrationTestsWeek = async (_req: Request, res: Response) => {
  pool.query("SELECT * FROM testtypes", (error, results) => {
    if (error) {
      res.status(404).send({ message: error });
    }
    res.status(200).json(results.rows);
  });
};
export const getUITestsWeek = async (_req: Request, res: Response) => {
  pool.query("SELECT * FROM testtypes", (error, results) => {
    if (error) {
      res.status(404).send({ message: error });
    }
    res.status(200).json(results.rows);
  });
};
export const getUnitTestsTodayEnv = async (req: Request, res: Response) => {
  pool.query(
    `SELECT test_type, status, count(status) FROM testresults
  where test_run_date > current_date
  and test_type = 'unit'
  and environment  = ${req.query.environment}
group by test_type, status
order by test_type, status asc`,
    (error, results) => {
      if (error) {
        res.status(404).send({ message: error });
      }
      res.status(200).json(results.rows);
    }
  );
};
export const getIntegrationTestsTodayEnv = async (
  req: Request,
  res: Response
) => {
  pool.query(
    `SELECT test_type, status, count(status) FROM testresults
  where test_run_date > current_date
  and test_type = 'integration'
  and environment  = ${req.query.environment}
group by test_type, status
order by test_type, status asc`,
    (error, results) => {
      if (error) {
        res.status(404).send({ message: error });
      }
      res.status(200).json(results.rows);
    }
  );
};
export const getUITestsTodayEnv = async (req: Request, res: Response) => {
  pool.query(
    `SELECT test_type, status, count(status) FROM testresults
  where test_run_date > current_date
  and test_type = 'ui'
  and environment  = ${req.query.environment}
group by test_type, status
order by test_type, status asc`,
    (error, results) => {
      if (error) {
        res.status(404).send({ message: error });
      }
      res.status(200).json(results.rows);
    }
  );
};
