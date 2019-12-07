const MongoClient = require("mongodb").MongoClient;
const dbName = "article";
const uri = `mongodb://localhost:27017`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

exports.dbClient = client;
exports.dbConnect = client.connect().then(() => {
  return Promise.resolve(client.db(dbName));
});
