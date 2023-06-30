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
