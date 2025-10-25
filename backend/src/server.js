import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import rateLimiter from './middleware/rateLimiter.js';
import cors from 'cors';

dotenv.config(); // to read the .env file and make the variables available in process.env

const app = express(); // will be used to define routes,miiddleware and other server logic.
const PORT = process.env.PORT || 5001; // Use the PORT from environment variables or default to 5001



//middleware
app.use(express.json()); // middleware to parse JSON request bodies : req.bodies

app.use(cors({
    origin: 'http://localhost:5173'
})) // Enable CORS for all routes

app.use((req , res , next)=>{    
    console.log( `The method is ${req.method} and the url is ${req.url}`)
    next();
})
app.use(rateLimiter);
app.use("/api/notes", notesRoutes);


connectDB()
app.listen(PORT, ()=>{
    console.log('Server is running on port ' + PORT);
});





