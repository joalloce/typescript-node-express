import { Request, Response, NextFunction } from "express";
import shortid from "shortid";

import Developer from "../types/Developer";
import DeveloperDTO from "../models/DeveloperModel";

export const createDeveloper = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, founded, headquarters } = req.body;
    const developer: Developer = {
      name,
      founded,
      headquarters,
      id: shortid(),
    };

    DeveloperDTO.createDeveloper(developer);

    res.status(200).json(developer);
  } catch (e) {
    res.status(400).json({ error: e });
  }
};

export const deleteDeveloper = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const developer = DeveloperDTO.deleteDeveloper(id);

    if (!developer) {
      return res.status(400).json({ error: "No such developer" });
    }

    res.status(200).json(developer);
  } catch (e) {
    res.status(400).json({ error: e });
  }
};

export const getDeveloper = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const developer = DeveloperDTO.getDeveloper(id);

    if (!developer) {
      return res.status(404).json({ error: "No such developer" });
    }

    res.status(200).json(developer);
  } catch (e) {
    res.status(400).json({ error: e });
  }
};

export const getDevelopers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const developers = DeveloperDTO.getDevelopers();

  res.status(200).json(developers);
};

export const updateDeveloper = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, founded, headquarters } = req.body;
    const { id } = req.params;

    const developer: Developer = {
      name,
      founded,
      headquarters,
      id,
    };

    const ok = DeveloperDTO.updateDeveloper(developer);

    if (!ok) {
      return res.status(404).json({ error: "No such developer" });
    }

    res.status(200).json(developer);
  } catch (e) {
    res.status(400).json({ error: e });
  }
};
