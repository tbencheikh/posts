const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/posts', (req, res) => {
  res.send(
    [{
      title: "Helddddlo World!",
      description: "Hi there! How are you?"
    }]
  )
})


app.listen(process.env.PORT || 8084)

 const MongoClient = require('mongodb').MongoClient , format = require('util').format;
 const uri = "mongodb+srv://tbench:attay12345@clustermdb-w5meh.mongodb.net/sample_training?retryWrites=true&w=majority";
 MongoClient.connect(uri,{ useNewUrlParser: true , useUnifiedTopology: true }, function (err, db) {
     if (err) {
         throw err;
     } else {
         console.log("successfully connected to the database");      
     }
     db.close();
 });
 
/* 
const uri = "mongodb+srv://tbench:attay12345@clustermdb-w5meh.mongodb.net/sample_training?retryWrites=true&w=majority";
var mongoUtil = require( './mongoUtil' );
mongoUtil.connectToDatabase(uri);
 */