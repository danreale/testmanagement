import express from "express";
const router = express.Router();

import {
  get,
  create,
  update,
  remove,
  getCounts,
} from "../controllers/testCases";

router.get("/", get);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", remove);

router.get("/counts", getCounts);

module.exports = router;
