export function getallNotes(req, res){
     res.status(200).send("We fetched 121 notes");  
}

export function createANote(req, res){
    res.status(200).send("This is the first created api for list of 12 notes");

}

export function updateANote(req, res){
    res.status(200).send("This is the first created api for list of 12 notes");
}


export function deleteANote(req, res){
    res.status(200).send("This is the first deleted api for list of 12 notes");
}