const express = require('express')
const { getNotes, 
        getNote, 
        createNote, 
        deleteNote, 
        updateNote, 
        DeleteAllNotes 
} = require("../controllers/noteController")
const router = express.Router()

// GET all Notes
router.get('/', getNotes)

// GET only the titles of all notes
router.get('/notes', getNotes)

// GET a single note using id
router.get('/:id', getNote);

// POST a new Note
router.post('/', createNote)

// DELETE a Note
router.delete('/:id', deleteNote)

// UPDATE a Note
router.patch('/:id', updateNote)

// Delete ALL Notes
router.delete("/notes/deleteAll", DeleteAllNotes)

module.exports = router 
