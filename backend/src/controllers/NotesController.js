import Note from "../models/Note.js";

export async function getAllNotes(req, res)
{
    try{
        const notes = await Note.find();
        res.status(200).send(notes);
    }
    catch(error)
    {
        console.error(error);
        res.status(500).json({message : "Internal Server Error"});
    }
    
}

export async function findNote(req, res)
{
    try
    {
        const note = await Note.findById(req.params.id);
        if(!note)
        {
            res.status(404).json({message : "Not Found"});
        }
        res.status(200).json(note);
    }
    catch(err)
    {
        res.status(500).send({message : "Internal Server Error"});
    }
}

export async function AddANote(req, res)
{
    try
    {
        const {title, content} = req.body;
        const newNote = new Note({title, content});
        await newNote.save();
        res.status(201).send({message : "Note successfully saved"});
    }
    catch(err)
    {
        console.error(err);
        res.status(500).send({message : "Internal Error"});
    }
}

export async function UpdateNote(req, res)
{
    try
    {
        const {title, content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title,content});
        if(!updatedNote)
        {
            res.status(404).json({message : "Invaid ID"})
        }
        else
        {
            res.status(200).json({message : "Note Updated Succesfully"});
        }
    }
    catch(err)
    {
        res.status(500).json("Internal Error");
    }
}

export async function DeleteNote(req, res)
{
    try{
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if(!deletedNote)
        {
            res.status(404).json({message : "Not Found"});
        }
        else
        {
            res.status(200).json({message : "Note Successfully Deleted"});
        }
    }
    catch(err)
    {
        res.status(500).json({message : err.message});
    }
}