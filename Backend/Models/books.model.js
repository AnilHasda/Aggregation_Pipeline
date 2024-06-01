import mongoose from "mongoose";
export const books = mongoose.model("books",new mongoose.Schema({},{strict:false}));