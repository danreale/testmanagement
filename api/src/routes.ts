import { Router } from "express";

const collection = require("../controllers/collection");

Router().get("/", collection.get);
Router().get("/users/:id", collection.getByUserId);
Router().get("/:id", collection.getById);
Router().post("/", collection.create);
Router().put("/:id", collection.update);
Router().delete("/:id", collection.delete);

// Test results

// Dashboards/Stats
