import mongoose from "mongoose";
// const mongoose =require()
const connectDb = async () => {
  const con = await mongoose.connect(
    "mongodb+srv://ajmal:ajmal123@cluster0.gmtqcww.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log(`MongoDB connected: `);
};


// module.exports=connectDb;
export { connectDb };
