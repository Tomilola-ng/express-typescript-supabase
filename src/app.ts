import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

const userRouter = require("./routes/user").default;

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Add more routes as needed
app.use("/api/users", userRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});

export default app;
