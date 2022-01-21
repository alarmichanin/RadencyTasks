import { v4 as uuidv4 } from 'uuid';

import { stats } from '../helpers/notesStats.js';
import Notes from '../repositories/notes.js';

let notes = Notes

export const getNotes = (req, res) => {
    res.send(notes);
}

export const getNote = (req, res) => {
    const { id } = req.params;
    const foundNote = notes.find(note => note.id == id);
    res.send(foundNote);
}

export const getStat = (req, res) => {
    res.status(200).send(stats(notes))
}

export const createNote = (req, res) => {
    const note = req.body;
    notes.push({ id: uuidv4(), ...note });
    res.send(`Note with the name ${note.Name} added to the DB`);
}

export const deleteNote = (req, res) => {
    const { id } = req.params;
    notes = notes.filter(note => note.id != id);
    res.send(`Note with the id: ${id} deleted from DB`);
}

export const updateNote = (req, res) => {
    const { id } = req.params;
    const { Name, Date, Category, Content, Active } = req.body;
    const note = notes.find(note => note.id == id);
    if (Name) note.Name = Name;
    if (Date) note.Date = Date;
    if (Category) note.Category = Category;
    if (Content) note.Content = Content;
    note.Active = Active;

    res.send(`Note with the id: ${id} has been updated`);
}

