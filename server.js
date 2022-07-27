const express = require('express')
const app = express()
const ejs = require('ejs') // importing ejs 
const expressLayout = require('express-ejs-layouts')
const path = require('path') // Importing path for views 
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose')
const console = require('console')
const { Database } = require('mongo')
const { connected } = require('process')

//DataBase connection
// const url = 'mongodb://localhost/userDB';
// mongoose.Promise = global.Promise;
// // Connect mongodb at default port 27017 in a DB called UserDB. You can change the name of the DB here.
// mongoose.connect(url, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
// }, (err) => {
//     if (!err) {
//         console.log('MongoDB Connection Succeeded.')
//     } else {
//         console.error('Error in DB connection: ' + err)
//     }
// });

//Assets
app.use(express.static('public'))

//Set Templet Engine
app.use(expressLayout)
app.set('views', path.join(__dirname, '/resources/views')) // showing a views files
app.set('view engine', 'ejs')

require('./routes/web')(app)





app.listen(PORT, () => {
    console.log(`Listing on port ${PORT}`)
})