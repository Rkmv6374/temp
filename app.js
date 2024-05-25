const express = require('express');
const mongoose = require ('mongoose');
const body_parser = require('body-parser')
const app = express();
const rm = 5
//get method
//post
//put
//delete
//server connected

// mongoose connection 



// middleware router handle 


const port = 4000;
app.listen(port,(err)=>{
    if(!err) console.log(`Server is Connected successfully on port http:localhost//${port}`)
    else console.log("error while connecting server");
}); 
/*
user requirement 
1. blog app -> read kar skte 
a.) read 
b.)search read
2. create user blog
a.) crud 
a.) log in register 
b.) register 
3. profile 
a.) crud
*/