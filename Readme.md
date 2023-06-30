![Untitledgrb](https://github.com/youssefshibl/gRPC-nodejs/assets/63800183/4e408d61-4332-4101-a425-0b341185287c)


# 🔁 gRPC-nodejs
## 📌 what is gRPC?
gRPC is a modern, open source, high-performance remote procedure call (RPC) framework that can run anywhere. gRPC enables client and server applications to communicate transparently, and simplifies the building of connected systems.

## 🏃 what is the difference between gRPC and REST?
gRPC is a modern, open source, high-performance remote procedure call (RPC) framework that can run anywhere. gRPC enables client and server applications to communicate transparently, and simplifies the building of connected systems , in Rest we use http/1.1 and in gRPC we use http/2, in Rest we use JSON and in gRPC we use protocol buffers , in Rest we use POST,GET,PUT,DELETE and in gRPC we use POST only , in Rest we use text and in gRPC we use binary data, in Rest connection closed after each request and in gRPC connection is persistent , in Rest we use client and server and in gRPC we use client,server and stream.

## 🧊 what is protocol buffers?
Protocol buffers are a language-neutral, platform-neutral extensible mechanism for serializing structured data. You define how you want your data to be structured once, then you can use special generated source code to easily write and read your structured data to and from a variety of data streams and using a variety of languages , google microservices use protocol buffers .

![protobuf_arch](https://github.com/youssefshibl/gRPC-nodejs/assets/63800183/0239bc40-48da-4b6d-be41-3a8ff1e2e7a5)



## ❓ what is the difference between protocol buffers and JSON?

| Protocol Buffers | JSON |
| --- | --- |
| Protocol buffers are 3 to 10 times smaller and 20 to 100 times faster than XML | JSON is slower and takes more time for parsing as compared to protocol buffers |
| Protocol buffers are statically typed | JSON is dynamically typed |
| Protocol buffers are binary format | JSON is text format |
| Protocol buffers are not human readable | JSON is human readable |
| Protocol buffers are not human editable | JSON is human editable |
| Protocol buffers are not human writable | JSON is human writable |
| Protocol buffers are not human debuggable | JSON is human debuggable |
| example | example |
| `0a 04 4a 6f 68 6e 10 1e 1a 07 72 65 61 64 69 6e 67 1a 08 73 77 69 6d 6d 69 6e 67` | `{ name: "John", age: 30, hobbies: ["reading", "swimming"] }` |

## 📌 How protocol buffers works ?

protocol buffers use .proto file to define the structure of the data , then we use the protocol buffer compiler to generate data access classes , then we use the generated classes to read and write data .

## 📌 How to install protocol buffers compiler and use it in node js ?

1 - install protocol buffers compiler in node js by `protobufjs` `protobufjs-cli` module .
```bash
npm install protobufjs protobufjs-cli
```

2 - create `.proto` file and define the structure of the data like this :

```proto
syntax = "proto3";

package example;

message Person {
  string name = 1;
  int32 age = 2;
  repeated string hobbies = 3;
}
```

3 - compile the .proto file to generate data access classes by this command :

```bash
npx pbjs -t static-module -w commonjs -o person.js protofile.proto
```
this will generate `person.js` file that contains the data access classes .

4 - use the generated classes to read and write data like this :

```js
const protobuf = require('protobufjs')

// from js object to binary
const schema = require('./person.js');
const Person = schema.example.Person;

const person_ = { name: "John", age: 30, hobbies: ["reading", "swimming"] };
const buffer = Person.encode(Person.create(person_)).finish();
console.log("Serialized person:", buffer);
const decodedPerson = Person.decode(buffer);
console.log("Decoded person:", decodedPerson);
```

5 - output will be like this :

```bash
Serialized person: <Buffer 0a 04 4a 6f 68 6e 10 1e 1a 07 72 65 61 64 69 6e 67 1a 08 73 77 69 6d 6d 69 6e 67>
Decoded person: Person { hobbies: [ 'reading', 'swimming' ], name: 'John', age: 30 }
```

3 - you can compile the .proto file to json format by this command :

```bash
npx pbjs -t json .\protofile.proto > bundle.json
```

4 - use the generated classes to read and write data like this :
```js

const protobuf = require('protobufjs')

let json_file = require('./bundle.json');
var root = protobuf.Root.fromJSON(json_file);
const Person = root.lookupType("example.Person");    

const person_ = { name: "John", age: 30, hobbies: ["reading", "swimming"] };
const buffer = Person.encode(Person.create(person_)).finish();
console.log("Serialized person:", buffer);
const decodedPerson = Person.decode(buffer);
console.log("Decoded person:", decodedPerson);
```
5 - output will be like this :

```bash
Serialized person: <Buffer 0a 04 4a 6f 68 6e 10 1e 1a 07 72 65 61 64 69 6e 67 1a 08 73 77 69 6d 6d 69 6e 67>
Decoded person: Person { hobbies: [ 'reading', 'swimming' ], name: 'John', age: 30 }
```

------
#### you can write code without compiling the .poroto file 
```js
const protobuf = require("protobufjs");

const root = protobuf.loadSync("protofile.proto");

const Person = root.lookupType("example.Person");

const person = { name: "John", age: 30, hobbies: ["reading", "swimming"] };
const buffer = Person.encode(Person.create(person)).finish();
console.log("Serialized person:", buffer);

const decodedPerson = Person.decode(buffer);
console.log("Decoded person:", decodedPerson);

```
## 📌 How gRPC works in microservices architecture ?
![grpc](https://github.com/youssefshibl/gRPC-nodejs/assets/63800183/e6454e32-d473-4398-8dbf-6c7acd241261)






