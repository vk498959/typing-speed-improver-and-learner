const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://0.0.0.0:27017/';
const client = new MongoClient(url);

// Database Name
const dbName = 'typing';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('user');
  console.log("server is running")
  var gname="pqr"
  var gemail="pqri@email.com"
  var gpassword="123456"
  // the following code examples can be pasted here...
  const filteredDocs = await collection.find({ email:gemail,password:gpassword }).toArray();
  console.log('Found documents filtered by =>', filteredDocs);
  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());