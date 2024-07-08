import express from "express";
import { dbConnection } from "./config/db.js";

//create the app, create a variable for expres
const app = express()

//connect to Database
dbConnection();



const port = process.env.PORT || 4040

//app should listen
app.listen(port, () => {
    console.log (`app is listening on port ${port}`)
})