import express from "express";
let router=express.Router();

import { test } from "../../Controllers/User/userPipeline.controllers.js";
router.route("/test").get(test);
export default router;