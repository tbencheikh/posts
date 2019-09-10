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

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://tbench:<attay12345>@clustermdb-w5meh.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  if (err) console.log('failed to connect')
  else {
    console.log('connected')
  }
  const collection = client.db("test").collection("devices");
  
  // perform actions on the collection object
  client.close();
});


app.listen(process.env.PORT || 8084)


