import express from "express";

import {
  createDeveloper,
  deleteDeveloper,
  getDeveloper,
  getDevelopers,
  updateDeveloper,
} from "../controllers/developerController";

const router = express.Router();

router.delete("/:id", deleteDeveloper);

router.get("/:id", getDeveloper);

router.get("/", getDevelopers);

router.patch("/:id", updateDeveloper);

router.post("/", createDeveloper);

export default router;
