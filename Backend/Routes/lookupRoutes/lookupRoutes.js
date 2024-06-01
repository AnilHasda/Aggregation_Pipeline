import express from "express";
let router=express.Router();
import { authorDetails } from "../../Controllers/Lookup/lookup.controller.js";
router.route("/authorDetails").get(authorDetails);
export default router;