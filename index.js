const express = require('express')
const app = express()
const mysql = require('mysql2')

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "expensetracker"
});

con.connect(function (err) {
    if(err)throw err;
    console.log("connected to database")
});
app.get('/',(req, res)=>{
    res.send('hello this is my node server, i am running this node server on aws ec2')
})

app.listen(8080,()=>{
    console.log('connected to the server')
})