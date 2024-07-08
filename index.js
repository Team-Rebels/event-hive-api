import express from "express";

//create the app, create a variable for expres
const app = express()





const port = process.env.PORT || 4040

//app should listen
app.listen(port, () => {
    console.log (`app is listening ${port}`)
})