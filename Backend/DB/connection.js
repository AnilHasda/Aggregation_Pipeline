import mongoose from "mongoose";
import dotenv from "dotenv";
import { asyncHanlder } from "../utils/asyncHandler.js";
dotenv.config({path:"./.env"});
let db_url=process.env.DB_URL;

const connection=asyncHanlder(async ()=>{
    console.log(db_url)
    let checkConnection=await mongoose.connect(db_url+"mongoAggregation");
    if(checkConnection){
        console.log("connection successful");
    }
});
export {connection};
