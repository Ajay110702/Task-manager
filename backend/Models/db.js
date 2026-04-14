import mongoose from 'mongoose'
export const connect_DB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Mongo DB is Connected...");
  } catch (err) {
    console.log("Mongo DB connection error..", err);
  }
};