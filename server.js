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
