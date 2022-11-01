import { Request, Response } from "express";
import { pool } from "../db";
import { TESTRESULT } from "../../../models/testresult";

export const get = async (_req: Request, res: Response) => {
  pool.query("SELECT * FROM testresults", (error, results) => {
    if (error) {
      res.status(404).send({ message: error });
    }
    res.status(200).json(results.rows);
  });
};

export const create = async (req: Request, res: Response) => {
  const tc: TESTRESULT = {
    test_case_id: req.body.test_case_id,
    test_case_name: req.body.test_case_name,
    status: req.body.status,
    duration: req.body.duration,
    test_type: req.body.test_type,
    environment: req.body.environment,
    error: req.body.error,
    stack_trace: req.body.stack_trace,
  };
  pool.query(
    `insert into testresults (test_case_id, test_case_name, status, duration, test_type, environment, error, stack_trace)
    VALUES('${tc.test_case_id}', '${tc.test_case_name}', '${tc.status}', '${tc.duration}', '${tc.test_type}', '${tc.environment}', ${tc.error}, ${tc.stack_trace}) RETURNING *`,
    (error, results) => {
      if (error) {
        res.status(404).send({ message: error });
      }
      res.status(200).json({ result: results.rows[0] });
      console.log(results.rows[0]);
    }
  );
};
export const update = async (req: Request, res: Response) => {
  const tc: TESTRESULT = {
    test_case_id: req.body.test_case_id,
    test_case_name: req.body.test_case_name,
    status: req.body.status,
    duration: req.body.duration,
    test_type: req.body.test_type,
    environment: req.body.environment,
    error: req.body.error,
    stack_trace: req.body.stack_trace,
  };
  pool.query(
    `update testresults set test_case_id = '${tc.test_case_id}', test_case_name = '${tc.test_case_name}', status = '${tc.status}', duration = '${tc.duration}', test_type = '${tc.test_type}', environment = '${tc.environment}', error = '${tc.error}', stack_trace = '${tc.stack_trace}' where test_result_id = ${req.params.id} RETURNING *`,
    (error, results) => {
      if (error) {
        res.status(404).send({ message: error });
      }
      res.status(200).json({ result: results.rows[0] });
    }
  );
};
export const remove = async (req: Request, res: Response) => {
  pool.query(
    `Delete FROM testresults where test_result_id = '${req.params.id}'`,
    (error, results) => {
      if (error) {
        res.status(404).send({ message: error });
      }
      res
        .status(200)
        .json({ test_result_id: req.params.id, deleteRows: results.rowCount });
    }
  );
};
