import express = require("express");
import { Request, Response } from "express";

const router = express.Router();

import MoviceService from "./movie.service";
const moviceService = new MoviceService();

router.post("/", (req: Request, res: Response) => {
  try {
    res.json(moviceService.addMovie(req.body));
  } catch (error) {
    if (error instanceof TypeError) {
      res.status(503).json({ message: "Type Error!" });
    }

    res.status(503).json({ message: "Woops Server Error!" });
  }
});

router.get("/", (req: Request, res: Response) => {
  res.json(moviceService.getMovies());
});

export default router;
