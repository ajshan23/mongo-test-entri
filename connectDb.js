import mongoose from "mongoose";
// const mongoose =require()
const connectDb = async () => {
  const con = await mongoose.connect(
    "mongodb+srv://ajmal:ajmal123@cluster0.gmtqcww.mongodb.net/mern-test"
  );
  console.log(con.connection.host, "mongodb connected successfully");
};

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  address: {
    type: String,
    required:true,
  },
  dob: {
    // dob means date of birth
    type: Date,
  },
  isVerified: {
    type: Boolean,
  },
});
//assignment mongodb types

//what is schema => schema is a set of rules
//what is model => it is a constructor function created from schema
//we use model inorder to interact with database

const User = mongoose.model("User", userSchema);

// module.exports=connectDb;
export { connectDb, User };
