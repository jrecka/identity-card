const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const app = express();
app.set('components', path.join(__dirname, 'components'));
app.set('view engine', 'html');
app.set(express.static(path.join(__dirname, 'style')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(flash());

module.exports = app;