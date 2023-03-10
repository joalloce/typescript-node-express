import cors from "cors";
import dovenv from "dotenv";
import express, { Express, Request, Response, NextFunction } from "express";

import gameRoutes from "./routes/games";
import developerRoutes from "./routes/developers";

dovenv.config();

const app: Express = express();
const port = process.env.PORT;

// cors
app.use(
  cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true,
  })
);

//it tracks every request that comes in
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(req.method, req.path);
  next();
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hey");
});

app.use("/api/games/", gameRoutes);
app.use("/api/developers/", developerRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
