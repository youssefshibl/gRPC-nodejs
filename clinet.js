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