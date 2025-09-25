import e from "express";
import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({

    title: {
        type: String, 
        required: true
    }, 

    content: {
        type: String,
        required: true
    }, 

}, {timestamps: true} // MongoDB provides the default the created at and updated at field to keep track of it) , creating a new object.//
 ) ;

const Note = mongoose.model('Note' , noteSchema); // 'Note' is the name of the collection in the database and noteSchema is the schema we defined above.

 export default Note; // we can import this Note model in other files to perform CRUD operations on the notes collection in the database.