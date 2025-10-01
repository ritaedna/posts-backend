const express = require("express");
const { connect } = require("mongoose");
require('dotenv').config()
const userRoutes =require("./routes/users")

const app = express();

app.get('/', (req, res)=>{
    res.send('welcome to my posts api')
})


//routes
app.use('/user', userRoutes);

const POST = process.env.PORT

app.listen(PORT, ()=>{
    console.log('Server is running on http://localhost: ${PORT}')
})

connect