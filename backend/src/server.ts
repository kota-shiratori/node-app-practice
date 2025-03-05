import express, { Request, Response, Application } from "express";
import cors from "cors";

const app: Application = express();
const PORT = 3000;

app.use(cors({ origin: "http://localhost:5173" }));

app.get("/", (req: Request, res: Response) => {
  console.log("getリクエスト");
  res.status(200).json({ message: "hello" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
