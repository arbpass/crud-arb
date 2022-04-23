const { response } = require('express');
const express = require('express');
const app = express();
const hbs= require("hbs");
const bodyParser = require('body-parser');
const async = require('hbs/lib/async');
const user= require("./router/user");
const path= require("path");
const port= process.env.PORT||3000;


//template engine settings
app.use(express.static('public'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, '/public')));

//fetch data within the websites
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use("/", user);


app.listen(port);