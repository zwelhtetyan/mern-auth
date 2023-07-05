import express, { Request, Response } from "express";
import env from "dotenv";
import userRouter from "./routes/users/user.route";
import { errorHandler, notFound } from "./middleware/error.middleware";
env.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.get("/", (req: Request, res: Response) => res.send("HI"));

app.use("/api/users", userRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
