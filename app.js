// app.js
const express = require('express');
const bodyParser = require('body-parser');

const autor = require('./routes/autor.route');
const app = express();
const mongoose = require('mongoose');
const expressValidator = require('express-validator')

let cors = require('cors');
let port = 1234;
let dev_db_url = 'mongodb+srv://someuser:abcd1234@cluster0-h0ox0.mongodb.net/autors';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
let db = mongoose.connection;

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(cors());
app.use(expressValidator())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api/v1/',autor);

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});