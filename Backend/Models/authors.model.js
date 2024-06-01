import mongoose from "mongoose";
export const authors=mongoose.model("authors",new mongoose.Schema({},{strict:false}));