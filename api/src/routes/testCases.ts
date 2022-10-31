import express from "express";
const router = express.Router();

import { get } from "../controllers/testCases";

router.get("/", get);
// Router().post("/", testcases.create);
// Router().put("/:id", testcases.update);
// Router().delete("/:id", testcases.delete);

// Router().get("/counts", testcases.get);

module.exports = router;
