import { Router } from "express";

import Movice from "./movie/movie.ctrl";
const router = Router();

router.use("/movie", Movice);
export default router;
