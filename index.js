const express = require('express')
const app = express()

app.get('/',(req, res)=>{
    res.send('hello this is my node server')
})

app.listen(80,()=>{
    console.log('connected to the server')
})