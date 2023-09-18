const { log } = require('console');
const express = require('express')
const mongoose = require('mongoose');
var Product=require("./models/product");

const server = express()
// server.use(express.urlencoded({ extended: true }));

// server.use(express.json());

mongoose.connect("mongodb+srv://yahia:ma112233@cluster0.fbvzfrk.mongodb.net/FacultySystemDB")
.then(()=>{
    log("Connected successfully");
}).catch((err)=>{
    log(err);
})
//First 
server.get('/home', function (req, res) {
    res.send('Welcome to our APIs')
})
//second
server.get('/products', function (req, res) {
    //use the query you learned in mongoose .
    Product.find().then((productsdata)=>{
        res.send(productsdata);
        log(productsdata)
    }).catch((err)=>{
        res.send({
            error: "Error Getting Product"
        })
    });
})
//third
server.get('/products/:id', function (req, res) {
    let pid= +req.params.id;
    Product.find({id:pid})
    .then((data)=>{
        res.send(data);
    }).catch(err=>{
        res.send("error");
    })
})
  //default routes 
server.get('/',function(req,res){
    res.redirect('/home');
})

server.get('**', function (req, res) {
  res.send('Error 404')
})

server.listen(4000)