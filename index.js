import express from "express";
import { connectDb, User } from "./connectDb.js";

const app = express();
const PORT = 4001;
app.use(express.json());

app.get("/", async (req, res) => {
  const data = await User.find();
  res.json(data);
});

app.post("/add-user", async (req, res) => {
  const name = req.body.nameOfCzn;
  const age = req.body.age;

  const data = await User.create({
    age: age,
    name: name,
  });
  console.log(data);
  res.json({
    message: "user created successfully",
    data,
  });
});

app.get("/user-get", async (req, res) => {
  const data = await User.find();
  res.json(data);
});

connectDb();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
