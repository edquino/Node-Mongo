const notesCtrl = {};

const Note = require('../models/notes');
const User = require('../models/user');

notesCtrl.renderNoteForm = (req, res) =>{
    res.render('notes/newNotes');
};

notesCtrl.createNewNote = async (req, res) =>{
    const {title, description} = req.body;
    const newNote = new Note({title, description});
    newNote.user = req.user.id;
    await newNote.save();
    req.flash('success_msg', 'Nota creada correctamente');
    res.redirect('/notes');
};

notesCtrl.renderNotes = async(req, res) =>{

    const notes = await Note.find({user: req.user.id}).sort({createdAt: 'desc'});
    res.render('notes/allNotes', {notes})
    
};

notesCtrl.rendereditform = async (req, res) =>{
    
    const { id } = req.params;
    const note = await Note.findById(id);
    if(note.user != req.user.id){
        req.flash('delete_msg', 'No Autorizado');
        return res.redirect('/notes');
    }
    res.render('notes/editNote', { note });
};

notesCtrl.updateNote = async (req, res) =>{
    const { id } = req.params;
    const { title, description } = req.body;
    
    await Note.findByIdAndUpdate(id, {title, description});
    req.flash('update_msg', 'Nota Actualizada Correctamente');
    res.redirect('/notes');
};

notesCtrl.deleteNote = async (req, res) =>{
    const { id } = req.params;

    await Note.findByIdAndDelete(id);
    req.flash('delete_msg', 'Nota Eliminada Correctamente');
    res.redirect('/notes');

};

module.exports = notesCtrl;