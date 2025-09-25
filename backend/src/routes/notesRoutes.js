import express from 'express';

import {getallNotes , getNotesById , createANote , deleteANote , updateANote} from '../controller/noteController.js'

const router = express.Router(); // will be used to define routes,miiddleware and other server logic.

export default router;


router.get('/', getallNotes)

router.get('/:id', getNotesById)

router.post('/' , createANote)
  
router.put('/:id' , updateANote)

router.delete('/:id' , deleteANote)




