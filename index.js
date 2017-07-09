//var express = require('express');
//var app = express();

//latest es6 syntax
const express = require('express'); //pulling exp pakg
const app = express();  //initialinzin exp app and saving it in a var
const mongoose = require('mongoose');
const config = require('./config/database');  //importing config module

mongoose.Promise = global.Promise; //config issue
//mongoose.connect('mongodb://localhost/test');
mongoose.connect(config.uri, (err) => {
  if(err){
    console.log('cant connect');
  }
  else{
    console.log('connected to db: '+config.db);
    //console.log(config.secret);
  }
});

//
app.use(express.static(__dirname+'/client/dist/')); //binding to Angilar index file

//app.get('/', function(req, res){
//  res.send('hello world');
//});

//app.listen(3000);
//when user sense a get req we'll respond
app.get('*', (req, res)=>{
  //res.send('<h1>hello world, hi!</h1>');
  res.sendFile(path.join(__dirname+'/client/dist/index.html'));
});

//telling a server to listen
app.listen(8080,() => {
    console.log('Listenin on port 8080');
});