import express from 'express';
// const express =requires('express'); // this is the old way of importing modules in nodejs

import notesRoutes from './routes/notesRoutes.js'
import { connectDB } from './config/db.js';

const app = express(); // will be used to define routes,miiddleware and other server logic.

app.use("/api/notes" , notesRoutes); // whenever we hit /api/notes it will go to notesRoutesb 



  
app.listen(5001, ()=>{
    console.log('Server is running on port 5001');
    
});

connectDB(); 


// mongodb+srv://samahicse_db_user:jRSPYXstrR4YAJeX@cluster0.cncsriw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0