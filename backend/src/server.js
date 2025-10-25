import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import rateLimiter from './middleware/rateLimiter.js';
import cors from 'cors';
import path from 'path';

dotenv.config(); // to read the .env file and make the variables available in process.env

const app = express(); // will be used to define routes,miiddleware and other server logic.
const PORT = process.env.PORT || 5001; // Use the PORT from environment variables or default to 5001
const __dirname = path.resolve();


//middleware
app.use(express.json()); // middleware to parse JSON request bodies : req.bodies


if(process.env.NODE_ENV !=='production'){
app.use(cors({
    origin: 'http://localhost:5173'
})) // Enable CORS for all routes
}
app.use((req , res , next)=>{    
    console.log( `The method is ${req.method} and the url is ${req.url}`)
    next();
})
app.use(rateLimiter);
app.use("/api/notes", notesRoutes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(  __dirname , '../frontend/dist' )));
    app.get('*', (req, res) => {
    res.sendFile(path.join( __dirname , "../frontend/", "dist" ,"index.html"));
});
}

connectDB()
app.listen(PORT, ()=>{
    console.log('Server is running on port ' + PORT);
});





