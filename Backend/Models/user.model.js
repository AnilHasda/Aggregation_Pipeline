import mongoose from "mongoose";
export const data=mongoose.model("users",new mongoose.Schema({},{strict:false}));
