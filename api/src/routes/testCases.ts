import express from "express";
const router = express.Router();

import {
  get,
  create,
  update,
  remove,
  getCounts,
  getManualCounts,
  getAutomatedCounts,
} from "../controllers/testCases";

router.get("/", get);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", remove);

router.get("/counts", getCounts);
router.get("/counts/automated", getAutomatedCounts);
router.get("/counts/manual", getManualCounts);

module.exports = router;
