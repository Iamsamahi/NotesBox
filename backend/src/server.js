import express from 'express';
// const express =requires('express'); // this is the old way of importing modules in nodejs

import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import rateLimiter from './middleware/rateLimiter.js';

dotenv.config(); // to read the .env file and make the variables available in process.env


const app = express(); // will be used to define routes,miiddleware and other server logic.
const PORT = process.env.PORT || 5001; // Use the PORT from environment variables or default to 5001


app.use(express.json()); // middleware to parse JSON request bodies : req.bodies

app.use((req , res , next)=>{    
    console.log( `The method is ${req.method} and the url is ${req.url}`)
    next();
})
app.use(rateLimiter);


app.use("/api/notes" , notesRoutes); // whenever we hit /api/notes it will go to notesRoutes 



connectDB().then(()=>{
app.listen(PORT, ()=>{
    console.log('Server is running on port ' + PORT);
});
}) .catch((err) => {
    console.error('Failed to connect to DB:', err);
    process.exit(1); // Exit the process with failure
  });




