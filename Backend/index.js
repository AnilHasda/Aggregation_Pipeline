import express from "express";
import dotenv from "dotenv";
import {connection} from "./DB/connection.js";
let app = express();
// dotenv configuration
dotenv.config({ path: "./.env" });
connection();
import router from "./Routes/userRoutes/userRoutes.js";

app.use("/api/v1/",router);

let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("App is running at port:" + port);
});
