import express from "express";
const router = express.Router();

import {
  getUITestsToday,
  getUnitTestsToday,
  getIntegrationTestsToday,
  getUITestsWeek,
  getUnitTestsWeek,
  getIntegrationTestsWeek,
  getUITestsTodayEnv,
  getUnitTestsTodayEnv,
  getIntegrationTestsTodayEnv,
} from "../controllers/stats";

router.get("/uiteststoday", getUITestsToday);
router.get("/unitteststoday", getUnitTestsToday);
router.get("/integrationteststoday", getIntegrationTestsToday);

router.get("/uitestsweek", getUITestsWeek);
router.get("/unittestsweek", getUnitTestsWeek);
router.get("/integrationtestsweek", getIntegrationTestsWeek);

router.get("/uiteststodayenv", getUITestsTodayEnv);
router.get("/unitteststodayenv", getUnitTestsTodayEnv);
router.get("/integrationteststodayenv", getIntegrationTestsTodayEnv);

module.exports = router;
