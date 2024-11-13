import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect("mongodb+srv://akshaymohancareer:pPuZBUYMqVwkRpU2@resumes.m78rj.mongodb.net/Resumes?retryWrites=true&w=majority&appName=Resumes").then(() => {
    console.log("MongoDB CONNECTED");
}).catch((err) => {
    console.log("ERROR: ", err);
});

const app = express();

app.listen(3000, () => {
    console.log("SERVER IS RUNNING ON PORT 3000!!");
});

