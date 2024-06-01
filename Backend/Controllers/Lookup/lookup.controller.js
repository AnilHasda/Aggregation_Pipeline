import { books } from "../../Models/books.model.js";
import { authors } from "../../Models/authors.model.js";
import { asyncHanlder } from "../../utils/asyncHandler.js";
import { apiResponse } from "../../utils/apiResponse.js";
// query 1: 
const authorDetails=asyncHanlder(async (req,resp)=>{
let response=await books.aggregate([
    {
        $lookup: {
          from: "authors",
          localField: "author_id",
          foreignField: "_id",
          as: "author"
        }
      },
    // if you have only one element inside books then use below code 
    // {
    //   $addFields: {
    //     author_detail: {
    //       $first:"$author_detail"
    //     }
    //   }
    // }
    {
        $addFields: {
          author_detail: {
            $arrayElemAt:["$author",0]
          }
        }
      },{
        $project:{
            author:0,
        }
      }
  ]);
  let responseData= new apiResponse(200,response);
  resp.status(responseData.statusCode).json(responseData.data);
});
export {authorDetails};