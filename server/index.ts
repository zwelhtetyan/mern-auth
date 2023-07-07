import env from "dotenv";
env.config();
import express, { Request, Response } from "express";
import userRouter from "./routes/users/user.route";
import { errorHandler, notFound } from "./middleware/error.middleware";
import { connectMongo } from "./lib/mongo";
import cookieParser from "cookie-parser";
import path from "path";

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/users", userRouter);

if (process.env.NODE_ENV === "production") {
  const dirname = path.resolve();
  app.use(express.static(path.join(dirname, "client", "dist")));

  app.get("*", (req: Request, res: Response) =>
    res.sendFile(path.join(dirname, "client", "dist", "index.html"))
  );
} else {
  app.get("/", (req: Request, res: Response) => res.send("HI"));
}

app.use(notFound);
app.use(errorHandler);

const initServer = async () => {
  console.log("initializing server");

  await connectMongo();
  app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
};

initServer();
