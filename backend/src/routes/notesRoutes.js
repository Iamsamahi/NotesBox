import express from 'express';

import {getallNotes , createANote , deleteANote , updateANote} from '../controller/noteController.js'

const router = express.Router(); // will be used to define routes,miiddleware and other server logic.

export default router;


router.get('/', getallNotes)

router.post('/created/' , createANote)
  
router.put('/:id' , updateANote)

router.delete('/:id' , deleteANote)




