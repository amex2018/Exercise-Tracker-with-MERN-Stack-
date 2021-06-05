const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./database/connection');
const morgan = require('morgan');
const path = require('path');
const userroute = require('./router/users');
const exerciseroute = require('./router/exercise');

dotenv.config({path:'config.env'});

const app = express();
const Port = process.env.PORT || 5000 ;

// database connected
 connectDB();


app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// routing
app.use('/users', userroute);
app.use('/exercises', exerciseroute);

// run server
app.listen(Port, ()=>{
    console.log(`Server is runnig ${Port}`)
})