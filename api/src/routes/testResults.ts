import express from "express";
const router = express.Router();

import { get, create, update, remove } from "../controllers/testResults";

router.get("/", get);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", remove);

module.exports = router;
