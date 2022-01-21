import express from 'express';
import { getNotes, getNote, getStat, createNote, deleteNote, updateNote } from '../services/notes.js'
import { validation } from '../helpers/validation.js';
import { createNoteSchema, updateNoteSchema } from '../helpers/notes.js';


const router = express.Router();

//all routes in here are starting with /notes


router.get('/', getNotes);

router.get('/stats', getStat);

router.get('/:id', getNote);

router.post('/', validation(createNoteSchema), createNote);

router.delete('/:id', deleteNote);

router.patch('/:id', validation(updateNoteSchema), updateNote);

export default router;