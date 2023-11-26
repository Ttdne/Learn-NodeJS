require('dotenv').config({ path: 'D:/CPP/Learn-NodeJS/.env' })
const express = require('express') //common js
//const { hostname } = require('os')

// import
console.log(process.env);
const path = require('path')
const configViewEngine = require('./config/viewengine')
const webRoutes = require('./routes/web')
const app = express() //app express
const port = process.env.PORT;  //port 
const hostname = process.env.HOST_NAME;

//config template engine
configViewEngine(app);

//khai báo route
app.use('/', webRoutes)
app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})