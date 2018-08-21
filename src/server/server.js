const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const mongoose = require('mongoose');
const Task = require('./api/models/idApplicationFormModel');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

 mongoose.Promise = global.Promise;
 mongoose.connect(keys.mongoDb.dbURI, ()=>{
  console.log('hahahaaaaaaa');
});
 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/idApplicationFormRoutes'); 
routes(app);
app.listen(port);

console.log('todo list RESTful API server started on: ' + port);

