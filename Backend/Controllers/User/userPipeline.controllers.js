// This controllers will explain the basic to intermediate mongodb aggregation pipelines
import { data } from "../../Models/user.model.js";
const test=async (req,resp)=>{
    let response=await data.find();
    console.log(response);
resp.send(response);
}
//query1:how many user 
export {test};