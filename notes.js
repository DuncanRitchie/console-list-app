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
    console.log("Running addNotes()")
    allNotes = loadNotes();
    allNotes.push({Reminder: note});
    saveNotes(allNotes)
}

const listNotes = () => {
    allNotes = loadNotes();
    allNotes.map((note)=>{console.log(note.Reminder)})
}

const removeNote = (deletedNote) => {
    allNotes = loadNotes();
    let notesToKeep = allNotes.filter((note)=>{
        return note.Reminder!==deletedNote
    })
}

module.exports = {
    addNotes,
    loadNotes,
    saveNotes,
    listNotes,
    removeNote
}