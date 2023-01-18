// index.js
// where your node app starts

// init project
require('dotenv').config()
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/app/app.js", function (req, res) {
  res.sendFile(__dirname + '/app/app.js');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api", (req, res) => {
  let date = new Date();
  res.json({unix: date.valueOf(), utc: date.toUTCString()});
});

app.get("/api/:timestamp", function (req, res) {
  let timestamp = req.params.timestamp;

  if (isNaN(Number(timestamp))) {
    date = new Date(timestamp);
  }
  else {
    date = new Date(parseInt(timestamp));
  }

  let unix = date.valueOf();
  let utc = date.toUTCString();
  
  if (unix) {
    res.json({unix: unix, utc: utc});
  }
  else {
    res.json({ error : "Invalid Date" });
  }

});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
