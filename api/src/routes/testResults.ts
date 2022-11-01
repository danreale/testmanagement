// import { Request, Response } from "express";
// import { pool } from "../db";
// // import { TESTRESULT } from "../../../models/testresult";

// export const get = async (_req: Request, res: Response) => {
//   pool.query("SELECT * FROM testcases", (error, results) => {
//     if (error) {
//       res.status(404).send({ message: error });
//     }
//     res.status(200).json(results.rows);
//   });
// };

// // export const create = async (req: Request, res: Response) => {
// //   const tc: TESTRESULT = {
// //     test_case_name: req.body.test_case_name,
// //     test_spec: req.body.test_spec,
// //     test_type: req.body.test_type,
// //     test_steps: req.body.test_steps,
// //     jira_references: req.body.jira_references,
// //   };
// //   pool.query(
// //     `insert into testcases (test_case_name, test_spec, test_type, test_steps, jira_references)
// //     VALUES('${req.body.test_case_name}', '${req.body.test_spec}', '${req.body.test_type}', '${req.body.test_steps}', '{${req.body.jira_references}}')`,
// //     (error, results) => {
// //       if (error) {
// //         res.status(404).send({ message: error });
// //       }
// //       res.status(200).json({ createdRecords: results.rowCount, tc });
// //     }
// //   );
// // };
// // export const update = async (req: Request, res: Response) => {
// //   const tc: TESTRESULT = {
// //     test_case_name: req.body.test_case_name,
// //     test_spec: req.body.test_spec,
// //     test_type: req.body.test_type,
// //     test_steps: req.body.test_steps,
// //     jira_references: req.body.jira_references,
// //   };
// //   pool.query(
// //     `update testcases set test_case_name = '${req.body.test_case_name}', test_spec = '${req.body.test_spec}', test_type = '${req.body.test_type}', test_steps = '${req.body.test_steps}', jira_references = '{${req.body.jira_references}}' where test_case_id = ${req.params.id}`,
// //     (error, results) => {
// //       if (error) {
// //         res.status(404).send({ message: error });
// //       }
// //       res.status(200).json({ updatedRecords: results.rowCount, tc });
// //     }
// //   );
// // };
// export const remove = async (req: Request, res: Response) => {
//   pool.query(
//     `Delete FROM testcases where test_case_id = '${req.params.id}'`,
//     (error, results) => {
//       if (error) {
//         res.status(404).send({ message: error });
//       }
//       res
//         .status(200)
//         .json({ test_case_id: req.params.id, deleteRows: results.rowCount });
//     }
//   );
// };
// export const getCounts = async (_req: Request, res: Response) => {
//   pool.query(
//     `select test_type, count(test_type) from testcases
//   group by test_type
//   order by test_type asc`,
//     (error, results) => {
//       if (error) {
//         res.status(404).send({ message: error });
//       }
//       res.status(200).json(results.rows);
//     }
//   );
// };
