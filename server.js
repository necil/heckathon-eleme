var express = require('express'),
app = express(),
port = process.env.PORT || 8080,
bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//adding routes
var routes = require('./api/routes/recordRoutes');
routes(app);

app.listen(port);
console.log('API Started on: ' + port);
