import express from "express";
import dotenv from "dotenv";
import {connection} from "./DB/connection.js";
let app = express();
// dotenv configuration
dotenv.config({ path: "./.env" });
connection();
import router1 from "./Routes/userRoutes/userRoutes.js";
import router2 from "./Routes/lookupRoutes/lookupRoutes.js";

app.use("/api/v1/",router1);
app.use("/api/v1/",router2);
let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("App is running at port:" + port);
});
