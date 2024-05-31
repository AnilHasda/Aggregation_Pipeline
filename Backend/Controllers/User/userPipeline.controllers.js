// This controllers will explain the basic to intermediate mongodb aggregation pipelines
import { data } from "../../Models/user.model.js";
import { apiResponse } from "../../utils/apiResponse.js";
import { apiError } from "../../utils/apiError.js";
import { asyncHanlder } from "../../utils/asyncHandler.js";

//query1:how many user are active?
const match1 = asyncHanlder(async (req, resp) => {
  let response = await data.aggregate([
    {
      $match: {
        isActive: true,
      },
    },
  ]);
  if (response) {
    let responseData = new apiResponse(200, response);
    console.log(responseData.data.length);
    resp.status(responseData.statusCode).json(responseData.data);
  } else {
    throw new apiError(404, "No such data found");
  }
});

// query-2:what is the average age of all users?
const averageAge = asyncHanlder(async (req, resp) => {
  let response = await data.aggregate([
    {
      $group: {
        _id: null,
        averageAgeOfusers: { $avg: "$age" },
      },
    },
  ]);
  let responseData = new apiResponse(200, response);
  resp.status(responseData.statusCode).json(responseData.data);
});

// query-3:List the top 5 favouriteFruits among all the users
const topFiveFavouriteFruits = asyncHanlder(async (req, resp) => {
  let response = await data.aggregate([
    {
      $group: {
        _id: "$favoriteFruit",
        count: { $sum: 1 },
      },
    },
    {
      $sort: {
        favoriteFruit: -1,
      },
    },
    {
      $limit: 5,
    },
  ]);
  let responseData = new apiResponse(200, response);
  resp.status(responseData.statusCode).json(responseData.data);
});

// query-4:Find the total number of males and females
const totalNumberOfMaleAndFemale = asyncHanlder(async (req, resp) => {
  let response = await data.aggregate([
    {
      $group: {
        _id: "$gender",
        totalCount: { $sum: 1 },
      },
    },
  ]);
  let responseData = new apiResponse(200, response);
  resp.status(responseData.statusCode).json(responseData.data);
});

//query-5: which country has the highest number of registered users
const countryWithHighestRegisteredUsers = asyncHanlder(async (req, resp) => {
  let response = await data.aggregate([
    {
      $group: {
        _id: "$company.location.country",
        totalRegisteredUsers: { $sum: 1 },
      },
    },
    {
      $sort: {
        totalRegisteredUsers: -1,
      },
    },
    {
      $limit: 1,
    },
  ]);
  let responseData = new apiResponse(200, response);
  resp.status(responseData.statusCode).json(responseData.data);
});

//quey-6: List all of the unique eyecolors
const uniqueEyeColor=asyncHanlder(async (req,resp)=>{
  let response=await data.aggregate([
    {
      $group:{
        _id:"$eyeColor"
      }
    },
  ]);
  let responseData = new apiResponse(200, response);
  resp.status(responseData.statusCode).json(responseData.data);
})

//query-7:What is the average number of tags per user
const averageTagsPerUser=asyncHanlder(async (req,resp)=>{
  let response=await data.aggregate([
    {
    $unwind: {
      path: "$tags",
    }
  },
    {
      $group:{
        _id:"$_id",
        countEachTagsPerUser:{$sum:1}
      }
    },{
      $group:{
        _id:null,
        averageTag:{$avg:"$countEachTagsPerUser"}
      }
    }
  ]);
  // second option to doing this by $size which gives us the size of an array
  /*
[
  {
  $addFields: {
    totalTagsPerUser:{
      $size:{$ifNull:["$tags",[]]}
    }
  }
},{
    $group: {
      _id: null,
      averageTags:{$avg:"$totalTagsPerUser"}
    }
}
]
  */
  let responseData = new apiResponse(200, response);
  resp.status(responseData.statusCode).json(responseData.data);
})

export {
  match1,
  averageAge,
  topFiveFavouriteFruits,
  totalNumberOfMaleAndFemale,
  countryWithHighestRegisteredUsers,
  uniqueEyeColor,
  averageTagsPerUser
};
