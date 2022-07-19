const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./server/database/connection')


const path = require('path');
const ejs = require('ejs');


const app = express()

//load the assets 
app.use('/css',express.static(path.join(__dirname, 'assets/css')))
app.use('/img',express.static(path.join(__dirname, 'assets/img')))
app.use('/js',express.static(path.join(__dirname, 'assets/js')))


//here we set the views engine
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }))

//connection the mongodb
// load the routers
app.use('/' ,require('./server/routs/router'))

app.listen(3000 , function(){
    console.log('listening on 3000');
})