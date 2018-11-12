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
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Authorization", "5p53iN9yd3");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization");
  next();
});

app.get('/', (req, res) => 
{
 /* con.query("select * from settings", function (err, result, fields) {
	if(req.headers.authorization)
		res.json(result[0]);
	else
		res.json({ message: 'Please make sure your request has an Authorization header' });

  });*/
	res.json({'ip': '192.168.0.1'});
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
