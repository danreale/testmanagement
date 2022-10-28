const pg = require("pg");
const format = require("pg-format");
import { TESTRESULT } from "../models/testresult";

const resArr: any = [];

const results: Array<TESTRESULT> = [
  {
    test_case_id: 1,
    test_case_name: "dans first test from code",
    status: "passed",
    duration: "0.2 ms",
    test_type: "ui",
    environment: "test2",
    error: null,
    stack_trace: null,
  },
  {
    test_case_id: 1,
    test_case_name: "dans second test from code",
    status: "failed",
    duration: "0.7 ms",
    test_type: "unit",
    environment: "impl2",
    error: null,
    stack_trace: null,
  },
];

for (const r of results) {
  const result = Object.values(r);
  resArr.push(result);
}

console.log(resArr);

// let results = [
//   [
//     "1",
//     "dans first test from code",
//     "passed",
//     "0.2 ms",
//     "ui",
//     "test2",
//     null,
//     null,
//   ],
//   [
//     "1",
//     "dans second test from code",
//     "failed",
//     "0.5 ms",
//     "integration",
//     "impl2",
//     null,
//     null,
//   ],
// ];
let query = format(
  "INSERT INTO testresults (test_case_id, test_case_name, status, duration, test_type, environment, error, stack_trace) VALUES %L returning test_result_id, test_case_id",
  resArr
);

async function run() {
  let client;
  try {
    client = new pg.Client({
      connectionString:
        "postgresql://danno:test123@localhost:5432/testmanagement",
    });
    await client.connect();
    let { rows } = await client.query(query);
    console.log(rows);
  } catch (e) {
    console.error(e);
  } finally {
    client.end();
  }
}

run();
