const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Crud= require("../db");
const bodyParser = require('body-parser');
const async = require('hbs/lib/async');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const DB= "mongodb+srv://arb:arbmongo@cluster0.smtw9.mongodb.net/crud?retryWrites=true&w=majority";


//ENDPOINTS
router.get("", (req, res )=>{
    MongoClient.connect(DB, function(err, client) {
        let db = client.db('crud'); //we are extracting data from DB then print it on screen
        db.collection("datas").find({}).toArray(function(err, result) {
          let obj= result;
          res.render("index",{
            dynamicComment: obj, //this is an object & this will get print one by one in index.hbs
        }); 
          client.close();
        });
      });
})

//function to fire create or update
router.post("", async (req,res)=>{
    MongoClient.connect(DB, function(err, client) {
        let db = client.db('crud'); //we are extracting data from DB then print it on screen
        db.collection("datas").find({}).toArray(function(err, result) {
            let obj= result;
            let found = obj.find(e => e.title === req.body.titleBox); //if title is in the object or not
            
            if(found == null)
                createRecord(req,res);
            else
                updateRecord(req,res);
        });
      });
})

//create function
function createRecord(req, res){
    const schema= new Crud({
        title: req.body.titleBox,
        notes: req.body.textBox,
    });
    schema.save()
    .then(()=>{
        console.log("success");
    })
    .catch((e)=>{
        console.log(e);
    })
    res.redirect("/home");
}

//update function
function updateRecord(req,res){
    MongoClient.connect(DB, function(err, client) {
    let db = client.db('crud'); 
    db.collection("datas").findOneAndUpdate({title: req.body.titleBox}, {$set:{notes:req.body.textBox}})

    if (!err) {
        res.redirect('/home');
    }
    else { console.log('Error in employee delete :' + err); }
    });
}

//delete
router.get('/delete/:id', (req, res) => {
    Crud.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/home');
        }
        else { console.log('Error in employee delete :' + err); }
    });
});


module.exports= router;