const fs = require("fs");

const loadNotes = () => {
    try {
        const allNotes = JSON.parse(fs.readFileSync("notes.json").toString());
        return allNotes
    }
    catch (e){
        return [];
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync("notes.json",JSON.stringify(notes))
}

const addNotes = (note) => {
    allNotes = loadNotes();
    allNotes.push({Note: note});
    saveNotes(allNotes)
}

const listNotes = () => {
    allNotes = loadNotes();
    allNotes.map((note)=>{console.log(note.Note)})
}

const removeNote = (deletedNote) => {
    allNotes = loadNotes();
    let notesToKeep = allNotes.filter((note)=>{
        return note.Note!==deletedNote
    })
    saveNotes(notesToKeep)
}

module.exports = {
    addNotes,
    loadNotes,
    saveNotes,
    listNotes,
    removeNote
}