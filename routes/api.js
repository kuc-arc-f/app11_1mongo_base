var express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;

import LibMongo from "../libs/LibMongo"

/*
router.get('/', function(req, res, next) {
  res.send('respond with a resource-1234');
});
*/
/******************************** 
* 
*********************************/
router.get('/tasks_index', async function(req, res) {
    try{
        const collection = await LibMongo.get_collection("tasks" )
        collection.find().sort({created_at: -1}).toArray(function(err, result) {
            if (err) throw err;
//            console.log(result);
            var param = {"docs": result };
            res.json(param)            
        });
    } catch (err) {
        console.log(err);
        res.status(500).send();    
    }   
});
/******************************** 
* 
*********************************/
router.post('/tasks_new', async function(req, res){
    try{
        var data = req.body;
        const collection = await LibMongo.get_collection("tasks" )
        var item = { 
            "title": data.title,
            "content": data.content,
            "created_at" : new Date()
        };        
        await collection.insertOne(item);
        res.json(req.body);
    } catch (err) {
        console.log(err);
        res.status(500).send();    
    }    
}); 
/******************************** 
* 
*********************************/
router.get('/tasks_show/:id', async function(req, res) {
console.log(req.params.id  );
    try{
        const collection = await LibMongo.get_collection("tasks" )
        var where = { _id: new ObjectID(req.params.id) }
        var task = await collection.findOne(where) 
        var param = {"docs": task };
        res.json(param);        
    } catch (err) {
        console.log(err);
        res.status(500).send();    
    }    
});
/******************************** 
* 
*********************************/
router.post('/tasks_update', async function(req, res){
    try{
        const collection = await LibMongo.get_collection("tasks" )
        var item = { 
            "title": req.body.title ,
            "content": req.body.content
        };           
        var where = {"_id": new ObjectID( req.body.id )};
        await collection.updateOne(where, { $set: item })
        res.json(req.body);
    } catch (err) {
        console.log(err);
        res.status(500).send();    
    }    
});
/******************************** 
* 
*********************************/
router.get('/tasks_delete/:id',async function(req, res) {
    try{
        const collection = await LibMongo.get_collection("tasks" )
        var where = { "_id": new ObjectID( req.params.id ) };
        await collection.deleteOne(where)
        res.json({id: req.params.id });
    } catch (err) {
        console.log(err);
        res.status(500).send();    
    }    
});

/******************************** 
* 
*********************************/
router.get('/tasks_test', function(req, res) {
});


module.exports = router;
