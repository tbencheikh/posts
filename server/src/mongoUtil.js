"use strict";
const MongoClient = require('mongodb').MongoClient , format = require('util').format;

let cachedDb = null;

function connectToDatabase (uri) {
  console.log('=> connect to database');

  if (cachedDb) {
    console.log('=> using cached database instance');
    return Promise.resolve(cachedDb);
  }

  /*return MongoClient.connect(uri,{useUnifiedTopology: true,useNewUrlParser: true })
    .then(db => {
      cachedDb = db;
      return cachedDb;
    });*/

    return MongoClient.connect(uri,{ useNewUrlParser: true , useUnifiedTopology: true }, function (err, db) {
            if (err) {
                throw err;
           } else {
               console.log("successfully connected to the database");
               cachedDb = db;
               return cachedDb;
            }
          //  db.close();
        });
}

function queryDatabase (db) {
  console.log('=> query database');

  return db.collection('companies').find({}).toArray()
    .then(() => { return { statusCode: 200, body: 'success' }; })
    .catch(err => {
      console.log('=> an error occurred: ', err);
      return { statusCode: 500, body: 'error' };
    });
}

exports.connectToDatabase= function (MONGODB_URI){
    connectToDatabase(MONGODB_URI).then(db => queryDatabase(db))
    .then(result => {
      console.log('=> returning result: ', result);
      callback(null, result);
    })
    .catch(err => {
      console.log('=> an error occurred: ', err);
      callback(err);
    });
}