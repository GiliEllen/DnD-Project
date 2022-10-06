import express from "express";
import http from "http";
import mongoose from "mongoose";
require("dotenv").config();


const app = express();
const port = process.env.PORT;

const url = process.env.MONGODB_URI;

mongoose.connect(url).then((res) => {
    console.log("Connected to DB");
}) .catch((err) => {
    console.log("Ath mongoose.connect:")
    console.log(err.messege)
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})