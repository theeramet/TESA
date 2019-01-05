var express = require('express');
var router = express.Router();
var axios = require("axios");
const MongoClient = require('mongodb').MongoClient;
const mongo_string = "mongodb://mongo:27017"

const client = new MongoClient(mongo_string);


/* GET */
router.get('/', function(req, res, next) {
   
  
  client.connect( (err) => {
      const db = client.db("test");
      const collection = db.collection('tb1');
      
      collection.find({}).toArray((err, docs)=> {
          res.send(docs);
      })
  });
});




//POST
router.post('/post',function(req, res, next){
    
    const data = req.body;
    
    client.connect( (err) => {
        const db = client.db("test");
        const collection = db.collection('tb1');
        collection.insertOne(data);
        res.send("INSERT Complete");
    });
});



router.get('/testgetdata', function(req, res, next) {
	axios.get('https://gist.githubusercontent.com/alphalin/328d40975e0ed6f65d95/raw/6971b6634ba506dc4280652d3cccfa22e8ef8cd8/president.json').then(function(data) {
		res.json(data.data);
	});

});



module.exports = router;
