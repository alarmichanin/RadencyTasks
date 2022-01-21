import express from 'express';
import { getNotes, getNote, createNote, deleteNote, updateNote } from '../services/notes.js'


const router = express.Router();

//all routes in here are starting with /notes


router.get('/', getNotes);

router.get('/:id', getNote);

router.post('/', createNote);

router.delete('/:id', deleteNote);

router.patch('/:id', updateNote);

export default router;