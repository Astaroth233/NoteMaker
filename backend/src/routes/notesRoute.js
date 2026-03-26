import express from 'express';
import { getAllNotes } from '../controllers/NotesController.js';
import { AddANote } from '../controllers/NotesController.js';
import { UpdateNote } from '../controllers/NotesController.js';
import { DeleteNote } from '../controllers/NotesController.js';
import { findNote } from '../controllers/NotesController.js';
const router = express.Router();

// router.get('/', getAllNotes);
// router.get('/:id', findNote);
// router.post('/add', AddANote);
// router.put('/update/:id', UpdateNote);
// router.delete('/delete/:id', DeleteNote);

router.get("/", getAllNotes);
router.get("/:id", findNote);
router.post("/", AddANote);
router.put("/:id", UpdateNote);
router.delete("/:id", DeleteNote);

export default router;