const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

// load protofile
const packageDefinition = protoLoader.loadSync('protofile.proto');
const randomProto = grpc.loadPackageDefinition(packageDefinition).random;

const server = new grpc.Server();

function generateRandomString(call, callback) {
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

server.bindAsync('localhost:50051', grpc.ServerCredentials.createInsecure(), () => {
  console.log('Server running at http://localhost:50051');
  server.start();
});