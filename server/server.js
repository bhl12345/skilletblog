// server.js
console.log('May Node be with you')
const express = require('express');
const bodyParser= require('body-parser');
const app = express();
 

app.listen(3000, function() {
	  console.log('listening on 3000')
	})
	

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://bhl12345:Me123-456@pontificatingpeasant.mkwnc.mongodb.net/pontificatingpeasant?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const db = client.db("pontificatingpeasant");
  const collection = db.collection("pontificatingpeasant");
  console.log('Connected to Database');
  app.use(bodyParser.urlencoded({ extended: true })) 
  app.post('/', (req, res) => {
  collection.insertOne(req.body)
    .then(result => {
      console.log(result)
    })
  app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
  // Note: __dirname is the current directory you're in. Try logging it and see what you get!
})

     
})

 
});

	
