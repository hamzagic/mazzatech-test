const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect('mongodb://mongo:27017/docker-node-mongo', 
{ useNewUrlParser: true })
.then(()=> console.log('MongoDB connected'))
.catch(err => console.log(err));

app.get('/', function (req, res){
    res.send('Hello World');
});

app.listen(3000, function(){
    console.log('App running on port 3000...');
});