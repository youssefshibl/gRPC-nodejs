const protobuf = require('protobufjs')

// from js object to binary
// const schema = require('./person.js');
// const Person = schema.example.Person;


let json_file = require('./one.json');
//console.log(json_file);
var root = protobuf.Root.fromJSON(json_file);
//console.log(root);
const Person = root.lookupType("example.Person");    



const person_ = { name: "John", age: 30, hobbies: ["reading", "swimming"] };
const buffer = Person.encode(Person.create(person_)).finish();
console.log("Serialized person:", buffer);

const decodedPerson = Person.decode(buffer);
console.log("Decoded person:", decodedPerson);





