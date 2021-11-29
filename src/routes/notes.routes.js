const {Router} = require('express');
const router = Router();
const { isAuthenticated } = require('../helpers/auth');

const { renderNoteForm, createNewNote, renderNotes, rendereditform, updateNote, deleteNote } = require('../controllers/notes.controllers');

//Get From Note
router.get('/notes/add', isAuthenticated, renderNoteForm);

//Create New Note
router.post('/notes/add', isAuthenticated , createNewNote);

//Get All Note
router.get('/notes', isAuthenticated, renderNotes);

//Edit Notes
router.get('/notes/edit/:id',isAuthenticated, rendereditform);

//Update Notes
router.put('/notes/edit/:id',isAuthenticated, updateNote);

//Delete Notes
router.delete('/notes/delete/:id', isAuthenticated, deleteNote);

module.exports = router;
