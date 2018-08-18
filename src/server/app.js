const express = require('express');
const  app = express();
const port = process.env.PORT || 4000;
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

// app.set('components', path.join(__dirname, 'components'));
// // app.set('view engine', );
// app.set(express.static(path.join(__dirname, 'style')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(flash());
