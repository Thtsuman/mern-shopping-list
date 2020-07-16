const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const keys = require('./config/keys')

// routes
const items = require('./routes/api/item')

const app = express()

// middleware
app.use(bodyParser.json())

// DB Config
const db = keys.mongoURI

// Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log("MongoDB Connected!"))
        .catch(err => console.log(`Not Connected Err: ${err}!`));


// Use routes
app.use('/api/items', items)

// Config Port
const port  = process.env.PORT || 5000;

// listen
app.listen(port, () => console.log(`Server started on port ${port}`))