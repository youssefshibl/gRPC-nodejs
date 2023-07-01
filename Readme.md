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
### you can go to [code](https://github.com/youssefshibl/gRPC-nodejs/tree/main/Protocol-Buffers)
----

## 📌 How gRPC works in microservices architecture ?
![grpc](https://github.com/youssefshibl/gRPC-nodejs/assets/63800183/e6454e32-d473-4398-8dbf-6c7acd241261)

as you show when client send request to server , the web server will handle the request and send it to the gRPC server , then the gRPC server will handle the request and send it to the microservice , then the microservice will handle the request and send the response to the gRPC server , then the gRPC server will send the response to the web server , then the web server will send the response to the client  , 
in grpc every service has its own proto file , and the proto file contains the structure of the data and the methods that the service can handle , every microservice has its own proto file , and the client has its own proto file that contains the structure of the data and the methods that the client can call .

## 🚧 type of gRPC connections
- unary : client send one request and get one response .

- server streaming : client send one request and get many responses .

- client streaming : client send many requests and get one response .

- bidirectional streaming : client send many requests and get many responses .

## 📌 unary type (what is ? )

unary type is the most common type of gRPC connections , in this type the client send one request and get one response , assume that there RandomService microservice that has `generateRandomString` method that return random number , and there is RandomClient that call `generateRandomString` method , the client send one request to the server and get one response , so the shape of proto file will be like this :

```proto
syntax = "proto3";

package random;

service RandomService {
  rpc generateRandomString (RandomStringRequest) returns (RandomStringResponse) {}
}

message RandomStringRequest {
  int32 numChars = 1;
}

message RandomStringResponse {
  string result = 1;
}
```

as you see the proto file contains the name of service which is `RandomService` , and the name of the method which is `generateRandomString` , and the request and response of the method , the request is `RandomStringRequest` and the response is `RandomStringResponse` , and the request contains the number of characters that the client want to generate , and the response contains the random string , and the server will generate the random string and send it to the client , the code of the server will be like this :

```js
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

// load protofile
const packageDefinition = protoLoader.loadSync('protofile.proto');
const randomProto = grpc.loadPackageDefinition(packageDefinition).random;
// make server
const server = new grpc.Server();

// set my method to generate random string
function generateRandomString(call, callback) {
  // get numchars from request which send from client
  const numChars = call.request.numChars || 10; // default to 10 characters if not specified
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < numChars; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  callback(null, { result });
}
// add service to server
server.addService(randomProto.RandomService.service, { generateRandomString:generateRandomString });
// bind server to port
server.bindAsync('localhost:50051', grpc.ServerCredentials.createInsecure(), () => {
  console.log('Server running at http://localhost:50051');
  server.start();
});
```

as you see the server has `generateRandomString` method that generate random string and send it to the client , and the code of the client will be like this :

```js
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
// load protofile of the server
const packageDefinition = protoLoader.loadSync('protofile.proto');
const randomProto = grpc.loadPackageDefinition(packageDefinition).random;
// make client
// note that we can make multi services in one client but our service RamdomService is one service
const client = new randomProto.RandomService('localhost:50051', grpc.credentials.createInsecure());
// our promice function that call generateRandomString method
function generateRandomString(numChars) {
  return new Promise((resolve, reject) => {
    client.generateRandomString({ numChars }, (err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response.result);
      }
    });
  });
}
async function test() {
  try {
    const randomString = await generateRandomString(100);
    console.log(randomString);
  } catch (err) {
    console.error(err);
  }
}
test();
```
### yo can got to [code](https://github.com/youssefshibl/gRPC-nodejs/tree/main/server_to_client)

---
## 📌 server streaming type (what is ? )

server streaming type is the type that the client send one request and get many responses , assume that there is a microservice that has `getRandomNumbers` method that return random numbers , and there is a client that call `getRandomNumbers` method , the client send one request to the server and get many responses , so the shape of proto file will be like this :

```proto
syntax = "proto3";

package random;

service RandomService {
  rpc generateRandomString (RandomStringRequest) returns (stream RandomStringResponse) {}
}

message RandomStringRequest {
  int32 numChars = 1;
}

message RandomStringResponse {
  string result = 1;
}
```
as you see the proto file is like the unary type but the response is stream , and the server will generate random numbers and send it to the client , the code of the server will be like this :

```js
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
// load protofile
const packageDefinition = protoLoader.loadSync("protofile.proto");
const randomProto = grpc.loadPackageDefinition(packageDefinition).random;
const server = new grpc.Server();
function generateRandomString(call) {
  const number = call.request.numChars || 10; // default to 10 characters if not specified
  for (let i = 0; i < 10; i++) {
    call.write({ result: generate(number) });
  }
  call.end();
}
// add service to server
server.addService(randomProto.RandomService.service, {
  generateRandomString: generateRandomString,
});
server.bindAsync(
  "localhost:50051",
  grpc.ServerCredentials.createInsecure(),
  () => {
    console.log("Server running at http://localhost:50051");
    server.start();
  }
);

function generate(number) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < number; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
```

as you see the server has `generateRandomString` method that generate random string and send it to the client , and the code of the client will be like this :

```js
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const packageDefinition = protoLoader.loadSync("protofile.proto");
const randomProto = grpc.loadPackageDefinition(packageDefinition).random;
const client = new randomProto.RandomService(
  "localhost:50051",
  grpc.credentials.createInsecure()
);
function test() {
  const stream = client.generateRandomString({ numChars: 100 });
  stream.on("data", (response) => {
    console.log(response.result);
  });
  stream.on("end", () => {
    console.log("Stream ended");
  });
}

test();
```
### yo can got to [code](https://github.com/youssefshibl/gRPC-nodejs/tree/main/server-side-streaming)

---
## 📌 client streaming type (what is ? )

client streaming type is the type that the client send many requests and get one response , assume that there is a microservice that has `getRandomNumbers` method that return random numbers , and there is a client that call `getRandomNumbers` method , the client send many requests to the server and get one response , so the shape of proto file will be like this :

```proto
syntax = "proto3";

package random;

service RandomService {
  rpc generateRandomString (stream RandomStringRequest) returns (RandomStringResponse) {}
}

message RandomStringRequest {
  int32 numChars = 1;
}

message RandomStringResponse {
  string result = 1;
}
```

as you see the proto file is like the unary type but the request is stream , and the server will generate random numbers and send it to the client , note that server wait to client sending and final it will response one time , the code of the server will be like this :

```js
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
// load protofile
const packageDefinition = protoLoader.loadSync('protofile.proto');
const randomProto = grpc.loadPackageDefinition(packageDefinition).random;
const server = new grpc.Server();
function generateRandomString(call, callback) {
  let sum = 0;
  call.on('data', (request) => {
    sum += request.numChars;
  });
  call.on('end', () => {

    callback(null, { result: generate(sum) });
  });
}
// add service to server
server.addService(randomProto.RandomService.service, { generateRandomString:generateRandomString });
server.bindAsync('localhost:50051', grpc.ServerCredentials.createInsecure(), () => {
  console.log('Server running at http://localhost:50051');
  server.start();
});
function generate(number) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < number; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
```

as you see the server has `generateRandomString` method that generate random string and send it to the client , and the code of the client will be like this :

```js
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync('protofile.proto');
const randomProto = grpc.loadPackageDefinition(packageDefinition).random;
const client = new randomProto.RandomService('localhost:50051', grpc.credentials.createInsecure());
async function test(numbers) {
  const stream = client.generateRandomString((err, response) => {
    if (err) {
      console.error(err);
    } else {
      console.log(response.result);
    }
  });
  for (const number of numbers) {
    //console.log(number);
    stream.write({ numChars: number });
  } 
  stream.end();
  
}
test([20,30,50]);
```

### yo can got to [code](https://github.com/youssefshibl/gRPC-nodejs/tree/main/client-side-streaming)

---
## 📌 bidirectional streaming type (what is ? )

bidirectional streaming type is the type that the client send many requests and get many responses , assume that there is a microservice that has `getRandomNumbers` method that return random numbers , and there is a client that call `getRandomNumbers` method , the client send many requests to the server and get many responses , so the shape of proto file will be like this :

```proto
syntax = "proto3";
package random;
service RandomService {
  rpc generateRandomString (stream RandomStringRequest) returns (stream RandomStringResponse) {}
}
message RandomStringRequest {
  int32 numChars = 1;
}
message RandomStringResponse {
  string result = 1;
}
```

as you see the proto file is like the client streaming type but the response is stream ,the client send many requests and get many responses , and the server will generate random numbers and send it to the client , note that server no wait to client sending and final it will response one time , it will response in every request , the code of the server will be like this :

```js
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
// load protofile
const packageDefinition = protoLoader.loadSync("protofile.proto");
const randomProto = grpc.loadPackageDefinition(packageDefinition).random;
const server = new grpc.Server();
function generateRandomString(call) {
  call.on("data", (request) => {
    call.write({ result: generate(request.numChars) });
  });
  call.on("end", () => {
    call.end();
  });
}
// add service to server
server.addService(randomProto.RandomService.service, {
  generateRandomString: generateRandomString,
});
server.bindAsync(
  "localhost:50051",
  grpc.ServerCredentials.createInsecure(),
  () => {
    console.log("Server running at http://localhost:50051");
    server.start();
  }
);
function generate(number) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < number; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

```

as you see the server has `generateRandomString` method that generate random string and send it to the client , and the code of the client will be like this :

```js
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync('protofile.proto');
const randomProto = grpc.loadPackageDefinition(packageDefinition).random;
const client = new randomProto.RandomService('localhost:50051', grpc.credentials.createInsecure());
async function test(numbers) {
  const stream = client.generateRandomString();
  stream.on('data', (response) => {
    console.log(response.result);
  });
  stream.on('end', () => {
    console.log('Stream ended');
  });
  for (const number of numbers) {
    //console.log(number);
    stream.write({ numChars: number });
  } 
  stream.end();
  
}
test([20,30,50]);
```


### yo can got to [code](https://github.com/youssefshibl/gRPC-nodejs/tree/main/bidirectional-streaming)

---

## you can read more about gRPC in [gRPC](https://grpc.io/docs/what-is-grpc/introduction/)



