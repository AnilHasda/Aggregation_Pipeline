import express from "express";
let router = express.Router();

import {
  match1,
  averageAge,
  topFiveFavouriteFruits,
  totalNumberOfMaleAndFemale,
  countryWithHighestRegisteredUsers,
  uniqueEyeColor,
  averageTagsPerUser,
  findInactiveUserNameAndAge,
  categorizeUsersByFavouriteFruit,
  usersHaveEnimAndId,
  allCompaniesLocatedInUSA
} from "../../Controllers/User/userPipeline.controllers.js";

router.route("/match1").get(match1);
router.route("/averageAge").get(averageAge);
router.route("/topFiveFavouriteFruits").get(topFiveFavouriteFruits);
router.route("/totalNumberOfMaleAndFemale").get(totalNumberOfMaleAndFemale);
router.route("/countryWithHighestRegisteredUsers").get(countryWithHighestRegisteredUsers);
router.route("/uniqueEyeColor").get(uniqueEyeColor);
router.route("/averageTagsPerUser").get(averageTagsPerUser);
router.route("/findInactiveUserNameAndAge").get(findInactiveUserNameAndAge);
router.route("/categorizeUsersByFavouriteFruit").get(categorizeUsersByFavouriteFruit);
router.route("/usersHaveEnimAndId").get(usersHaveEnimAndId);
router.route("/allCompaniesLocatedInUSA").get(allCompaniesLocatedInUSA);
export default router;
