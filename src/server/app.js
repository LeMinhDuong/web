const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost", // ip address of server running mysql
  user: "root", // user name to your mysql database
  password: "", // corresponding password
  database: "web" // use the specified database
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => 
{
	//res.setHeader('Content-Type', 'application/json');
    //res.send(JSON.stringify({ ip: 1 }));
	/*var data = {
    'ip': '192.168.0.1'
  };
  res.json(data);*/
  
  con.query("select * from settings", function (err, result, fields) {
	 res.json(result[0]);
  });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

/*
// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    //res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    //res.setHeader('Access-Control-Allow-Credentials', false);

    // Pass to next layer of middleware
    next();
});*/