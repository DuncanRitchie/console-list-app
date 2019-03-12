const notes = require("./notes");
const yargs = require("yargs");

command = process.argv[2];

switch (command) {
    case "add":
    console.log("Adding a note!");
    notes.addNotes(yargs.argv.note);
    break;
    case "remove":
    console.log(`Removing "${yargs.argv.note}"!`);
    notes.removeNote(yargs.argv.note);
    break;
    case "list":
    console.log("Listing all notes!");
    notes.listNotes();
    break;
    default:
    console.log("Command not recognised!")
}