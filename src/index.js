const route= require('./route/route')
const express = require('express')
const mongoose =require('mongoose')

const app= express()

app.use(express.json())

mongoose.connect("mongodb+srv://Rohitsch:S*Crohit16@cluster0.31aen.mongodb.net/mockAssignement",{
    useNewUrlParser: true
})

.then(()=>{console.log("mongo-Db is connected")})
.catch((err)=>{console.log(err)})

app.use('/',route)

app.listen(3000, function(){
    console.log("express is running on port 3000")
})
