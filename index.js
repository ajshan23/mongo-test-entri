import express from "express";
import { connectDb, User } from "./connectDb.js";

const app = express();
const PORT = 4002;
app.use(express.json());

// app.get("/:name", async (req, res) => {
//   const data = await User.find({name:req.params.name});
//   res.json(data);
// });

app.post("/add-user", async (req, res) => {
  const name = req.body.nameOfCzn;
  const age = req.body.age;
  const addresss = req.body.address;
  const data = await User.create({
    age,
    name,
    address: addresss,
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
// app.get("/single-user/:userid", async (req, res) => {
//   const id = req.params.userid;
//   const user = await User.findById(id);
//   res.json(user);
// });
// app.get("/single-user/:userid", async (req, res) => {
//   const id = req.params.userid;
//   const user=await User.findOne({_id:id})
//   res.json(user)
// });
app.get("/single-user/:name", async (req, res) => {
  const nameFromParams = req.params.name;
  const user = await User.findOne({ name: nameFromParams });
  res.json(user);
});

// app.put("/update-user/:userid", async (req, res) => {
//   const id = req.params.userid;
//   const ageFromBody = req.body.age;
//   const user=await User.findByIdAndUpdate(id,{age:ageFromBody},{new:true})//id,data,{new:true}
//   res.json(user)
// });
app.put("/update-user/:userid", async (req, res) => {
  const idFromParams = req.params.userid;
  const ageFromBody = req.body.age;
  const user = await User.updateOne(
    { _id: idFromParams },
    { age: ageFromBody }
  ); //selection,data to be updated
  res.json(user);
});
app.delete("/user-id-delete", async (req, res) => {
  const id = req.body.id;

  await User.findByIdAndDelete(id);
  // await User.deleteOne({});
  // await User.deleteOne({name:name});
  res.send("deleted successfully");
});
app.delete("/user-field-delete", async (req, res) => {
  const ageOfTheUser = req.body.age;
  await User.deleteMany({ age: ageOfTheUser }); //if i dont gave any condition => every data in the user collection get deleted

  res.send("deleted successfully");
});

connectDb();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
