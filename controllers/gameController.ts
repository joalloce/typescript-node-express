import { Request, Response, NextFunction } from "express";
import shortid from "shortid";

import Game from "../types/Game";
import GameDTO from "../models/GameModel";

export const createGame = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, genre, rating, developer, release_date } = req.body;
    const game: Game = {
      title,
      genre,
      rating,
      developer,
      release_date,
      id: shortid(),
    };

    GameDTO.createGame(game);

    res.status(200).json(game);
  } catch (e) {
    console.log(e);
    res.status(400).json({ error: e });
  }
};

export const deleteGame = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  const game = GameDTO.deleteGame(id);

  if (!game) {
    return res.status(400).json({ error: "No such game" });
  }

  res.status(200).json(game);
};

export const getGame = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  const game = GameDTO.getGame(id);

  if (!game) {
    return res.status(404).json({ error: "No such game" });
  }

  res.status(200).json(game);
};

export const getGames = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const games = GameDTO.getGames();

  res.status(200).json(games);
};

export const updateGame = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, genre, rating, developer, release_date } = req.body;
  const { id } = req.params;

  const game: Game = {
    title,
    genre,
    rating,
    developer,
    release_date,
    id,
  };

  const ok = GameDTO.updateGame(game);

  if (!ok) {
    return res.status(404).json({ error: "No such game" });
  }

  res.status(200).json(game);
};
