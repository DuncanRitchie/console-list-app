const notes = require("./notes");
const yargs = require("yargs");
console.log(process.argv)

command = process.argv[2];

console.log(yargs.argv)


switch (command) {
    case "add":
    console.log("Adding a note!");
    notes.addNotes(yargs.argv.notes);
    break;
    case "remove":
    console.log("Removing a note!");
    break;
    case "list":
    console.log("Listing all notes!");
    break;
    default:
    console.log("Command not recognised!")
}