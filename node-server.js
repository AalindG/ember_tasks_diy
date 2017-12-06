/////////////
// Imports //
/////////////

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/database');

// Set up DB connection
mongoose.connect(config.database);
const db = mongoose.connection;

// Check Connection
db.once('open', () => {
	console.log('DB Connected!');
})

db.on('error', err => console.log('Error while connecting to DB: ', err));



