const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require("dotenv").config();
const app = express();

const apiRoutes = require('./routes/routes');

mongoose.connect(process.env.URI, {useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyParser.json());

app.use('/', apiRoutes);


module.exports = app;