var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const mongo_string = "mongodb://mongo:27017"

/* GET users listing. */
router.get('/', function(req, res, next) {
    const client = new MongoClient(mongo_string);

    client.connect( (err) => {
        const db = client.db("test");
        const collection = db.collection('tb1');
        collection.find({}).toArray((err, docs)=> {
            res.send(docs);
        })
    });
});

/* POST */ 
router.post('/gg',function(req,res){
    
    mongoClient.connect(mongo_string, function(err, db){

        const data = {name : req.body.name};
        db.collection(couress)
        .insertOne(data,(err, result)=>{
            if(err) throw err;
            const response = {result : 'ok' , message : result.result.n + "Inserted"};
        });
        db.close();
    });
    res.send("TEST");
})



module.exports = router;
