const pg = require("pg");
const format = require("pg-format");

let users = [["dan3"], ["dan4"]];
let query1 = format(
  "INSERT INTO testtypes (type_name) VALUES %L returning test_type_id, type_name",
  users
);

async function run() {
  let client;
  try {
    client = new pg.Client({
      connectionString:
        "postgresql://danno:test123@localhost:5432/testmanagement",
    });
    await client.connect();
    let { rows } = await client.query(query1);
    console.log(rows);
  } catch (e) {
    console.error(e);
  } finally {
    client.end();
  }
}

run();
