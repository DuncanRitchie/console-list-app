const fs = require("fs");

person = {
    name: "Duncan Ritchie",
    age: 22,
}

personJson = JSON.stringify(person)
console.log(personJson)
fs.writeFileSync("testingJson/person.json",personJson)

const data = JSON.parse(fs.readFileSync("testingJson/person.json").toString())
console.log(data)