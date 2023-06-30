const protobuf = require("protobufjs");

protobuf.load("protofile.proto", (err, root) => {
  if (err) {
    throw err;
  }
console.log("-----------");
  const Person = root.lookupType("example.Person");

  const person = { name: "John", age: 30, hobbies: ["reading", "swimming"] };
  const buffer = Person.encode(Person.create(person)).finish();
  console.log("Serialized person:", buffer);

  const decodedPerson = Person.decode(buffer);
  console.log("Decoded person:", decodedPerson);
});
