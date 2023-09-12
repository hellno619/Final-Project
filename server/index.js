import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from 'cors';
import { userRoute } from "./routes/userRoute.js";
import { residencyRoute } from "./routes/residencyRoute.js";
dotenv.config()
const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`);

});
app.use('/api/user' , userRoute)
app.use("/api/residency" , residencyRoute)
const express = require('express');
const cors = require('cors'); // Import the cors middleware


// Use the cors middleware to enable CORS
app.use(cors());

// Your API routes and other middleware
app.get('/api/user/allFav', (req, res) => {
  // Your API logic here
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
