const express = require('express') //common js
//const { hostname } = require('os')
require('dotenv').config({ path: 'D:/CPP/Learn-NodeJS/src/.env' })

// import
console.log(process.env);
const path = require('path')
const app = express() //app express
const port = process.env.PORT;  //port 
const hostname = process.env.HOST_NAME;
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//khai báo route
app.get('/', (req, res) => {
    //res.send('Hello World!')
    res.render('sample.ejs')
})
app.get('/abc', (req, res) => {
    res.send('check ABC')
})

app.get('/baba', (req, res) => {
    res.send('<h1>check ABC</h1>')
})
app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})