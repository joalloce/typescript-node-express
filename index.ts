import dovenv from "dotenv";
import express, { Express, Request, Response } from "express";

dovenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Hey");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
