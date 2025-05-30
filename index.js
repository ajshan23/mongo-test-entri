import express from "express";
import { connectDb } from "./connectDb.js";
const app = express();
const PORT = 4000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

connectDb();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
