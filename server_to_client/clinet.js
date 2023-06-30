const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync('protofile.proto');
const randomProto = grpc.loadPackageDefinition(packageDefinition).random;

const client = new randomProto.RandomService('localhost:50051', grpc.credentials.createInsecure());

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