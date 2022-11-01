import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { connectToDB } from "./db";

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const testCasesRoutes = require("./routes/testCases");
const testResultsRoutes = require("./routes/testResults");
const testTypesRoutes = require("./routes/testTypes");
const statsRoutes = require("./routes/stats");

app.use("/testcases", testCasesRoutes);
app.use("/testresults", testResultsRoutes);
app.use("/testtypes", testTypesRoutes);
app.use("/stats", statsRoutes);

app.get("/api/v1/ping", (_req: Request, res: Response) => {
  res.json({ message: "pong" });
});
app.get("/api/v1/version", (_req: Request, res: Response) => {
  var config = require("../../package.json");
  try {
    res.json({ version: config.version });
  } catch (err) {
    res.json({ message: err });
  }
});

connectToDB();
app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`);
});
