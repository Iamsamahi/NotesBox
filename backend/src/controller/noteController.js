import Note from "../models/Note.js";




export async function getallNotes(req, res){

    try {
      const notes = await Note.find().sort({createdAt: -1}); // to get all the notes from the database and sort them in descending order of createdAt field.
      res.status(200).json(notes);        
    } catch (error) { 
        console.error("Error fetching notes:", error);
        res.status(500).json({ message: "Internal Server Error" });     
    }

}

export async function getNotesById(req, res){
    try {
       const note = await Note.findById(req.params.id);
         if(!note){
            return res.status(404).json({ message: "The desired note is not available" });
         } 
         res.status(200).json(note);



    } catch (error) {
        console.error("Error fetching notes:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function createANote(req, res){
   
   
    try {
       const {title , content} = req.body;
       const createNote = await Note.create({title, content}) 
       res.status(201).json(createNote);
        
    } catch (error) {
        console.log("Error creating a note controller:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
    

}

export async function updateANote(req, res){

    try {
        const {title , content} = req.body;
        const updateNote = await Note.findByIdAndUpdate(req.params.id, {title , content} , {new: true})

        if(!updateNote){
            return res.status(404).json({ message: "Note not found" });
        } res.status(200).json({ message: "Note updated successfully" , updateNote});
        
    } catch (error) {
          console.log("Error updating note controller:", error);
          res.status(500).json({ message: "Internal Server Error" });
    }

}


export async function deleteANote(req, res){
    try {
        const {title , content} = req.body;
        const deleteNote = await Note.findByIdAndDelete(req.params.id, {title , content}, {new: true})
        if(!deleteNote){
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json({ message: "Note deleted successfully" , deleteNote});
        
    } catch (error) {
          console.log("Error deleting note controller:", error);
          res.status(500).json({ message: "Internal Server Error" });
    }
   
}