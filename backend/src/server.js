import express from 'express';
// const express =requires('express'); // this is the old way of importing modules in nodejs

import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';

dotenv.config(); // to read the .env file and make the variables available in process.env


const app = express(); // will be used to define routes,miiddleware and other server logic.
const PORT = process.env.PORT || 5001; // Use the PORT from environment variables or default to 5001
connectDB(); 

app.use(express.json()); // middleware to parse JSON request bodies
app.use("/api/notes" , notesRoutes); // whenever we hit /api/notes it will go to notesRoutesb   



  
app.listen(PORT, ()=>{
    console.log('Server is running on port ' + PORT);
});



