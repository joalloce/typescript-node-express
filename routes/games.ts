import express from "express";

import {
  createGame,
  deleteGame,
  getGame,
  getGames,
  updateGame,
} from "../controllers/gameController";

const router = express.Router();

router.delete("/:id", deleteGame);

router.get("/:id", getGame);

router.get("/", getGames);

router.patch("/:id", updateGame);

router.post("/", createGame);

export default router;
