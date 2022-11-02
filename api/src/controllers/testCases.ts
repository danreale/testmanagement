import { Request, Response } from "express";
import { pool } from "../db";
import { TESTCASE } from "../models/testcase";

export const get = async (_req: Request, res: Response) => {
  pool.query("SELECT * FROM testcases", (error, results) => {
    if (error) {
      res.status(404).send({ message: error });
    }
    res.status(200).json(results.rows);
  });
};

export const create = async (req: Request, res: Response) => {
  const tc: TESTCASE = {
    test_case_name: req.body.test_case_name,
    test_spec: req.body.test_spec,
    test_type: req.body.test_type,
    test_steps: req.body.test_steps,
    jira_references: req.body.jira_references,
    automated: req.body.automated,
  };
  pool.query(
    `insert into testcases (test_case_name, test_spec, test_type, test_steps, jira_references, automated)
    VALUES('${tc.test_case_name}', '${tc.test_spec}', '${tc.test_type}', '${tc.test_steps}', '{${tc.jira_references}}', ${tc.automated}) RETURNING *`,
    (error, results) => {
      if (error) {
        res.status(404).send({ message: error });
      }
      res.status(200).json({ result: results.rows[0] });
    }
  );
};
export const update = async (req: Request, res: Response) => {
  const tc: TESTCASE = {
    test_case_name: req.body.test_case_name,
    test_spec: req.body.test_spec,
    test_type: req.body.test_type,
    test_steps: req.body.test_steps,
    jira_references: req.body.jira_references,
    automated: req.body.automated,
  };
  pool.query(
    `update testcases set test_case_name = '${tc.test_case_name}', test_spec = '${tc.test_spec}', test_type = '${tc.test_type}', test_steps = '${tc.test_steps}', jira_references = '{${tc.jira_references}}', automated = ${tc.automated} where test_case_id = ${req.params.id} RETURNING *`,
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
    `Delete FROM testcases where test_case_id = '${req.params.id}'`,
    (error, results) => {
      if (error) {
        res.status(404).send({ message: error });
      }
      res
        .status(200)
        .json({ test_case_id: req.params.id, deleteRows: results.rowCount });
    }
  );
};
export const getCounts = async (_req: Request, res: Response) => {
  pool.query(
    `select test_type, count(test_type) from testcases
  group by test_type
  order by test_type asc`,
    (error, results) => {
      if (error) {
        res.status(404).send({ message: error });
      }
      res.status(200).json(results.rows);
    }
  );
};

export const getAutomatedCounts = async (_req: Request, res: Response) => {
  pool.query(
    `select test_type, count(automated) from public.testcases
    where automated is true
    group by test_type, automated
    order by test_type asc`,
    (error, results) => {
      if (error) {
        res.status(404).send({ message: error });
      }
      res.status(200).json(results.rows);
    }
  );
};
export const getManualCounts = async (_req: Request, res: Response) => {
  pool.query(
    `select test_type, count(automated) from public.testcases
    where automated is false
    group by test_type, automated
    order by test_type asc`,
    (error, results) => {
      if (error) {
        res.status(404).send({ message: error });
      }
      res.status(200).json(results.rows);
    }
  );
};
