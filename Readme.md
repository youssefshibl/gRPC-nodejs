![background](https://github.com/youssefshibl/gRPC-nodejs/assets/63800183/e93ab1be-2d9b-40bf-b241-638b61f43eb4)


# 🔁 gRPC-nodejs
## what is gRPC?
gRPC is a modern, open source, high-performance remote procedure call (RPC) framework that can run anywhere. gRPC enables client and server applications to communicate transparently, and simplifies the building of connected systems.

## what is the difference between gRPC and REST?
gRPC is a modern, open source, high-performance remote procedure call (RPC) framework that can run anywhere. gRPC enables client and server applications to communicate transparently, and simplifies the building of connected systems , in Rest we use http/1.1 and in gRPC we use http/2, in Rest we use JSON and in gRPC we use protocol buffers , in Rest we use POST,GET,PUT,DELETE and in gRPC we use POST only , in Rest we use text and in gRPC we use binary data, in Rest connection closed after each request and in gRPC connection is persistent , in Rest we use client and server and in gRPC we use client,server and stream.

## what is protocol buffers?
Protocol buffers are a language-neutral, platform-neutral extensible mechanism for serializing structured data. You define how you want your data to be structured once, then you can use special generated source code to easily write and read your structured data to and from a variety of data streams and using a variety of languages , google microservices use protocol buffers .

![protobuf_arch](https://github.com/youssefshibl/gRPC-nodejs/assets/63800183/aa150e08-fa1a-471e-8859-b31242721b25)


## what is the difference between protocol buffers and JSON?

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

## How gRPC works in microservices architecture ?
![grpc](https://github.com/youssefshibl/gRPC-nodejs/assets/63800183/784ea70e-855c-4ea4-84ed-14e56250b78d)



