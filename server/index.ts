import express, { Request, Response } from "express";
import env from "dotenv";
import userRouter from "./routes/users/user.route";
env.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.get("/", (req: Request, res: Response) => res.send("HI"));

app.use("/api/users", userRouter);

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
