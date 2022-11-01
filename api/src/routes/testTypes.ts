import express from "express";
const router = express.Router();

import { get } from "../controllers/testTypes";

router.get("/", get);

module.exports = router;
