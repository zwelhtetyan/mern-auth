import env from "dotenv";
env.config();
import express, { Request, Response } from "express";
import userRouter from "./routes/users/user.route";
import { errorHandler, notFound } from "./middleware/error.middleware";
import { connectMongo } from "./lib/mongo";

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => res.send("HI"));

app.use("/api/users", userRouter);

app.use(notFound);
app.use(errorHandler);

const initServer = async () => {
  console.log("initializing server");

  await connectMongo();
  app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
};

initServer();
