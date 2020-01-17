let MongoClient = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017/runoob';

MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
    if (err) throw err;
    console.log("数据库已创建!");
    db.close();
  });