const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')
var mysql = require('mysql');

const cors = require('cors');
const jwt = require('jsonwebtoken');

var con = mysql.createConnection({
  host: "localhost", // ip address of server running mysql
  user: "root", // user name to your mysql database
  password: "", // corresponding password
  database: "web" // use the specified database
});

var connection;

function handleDisconnect() {
  connection = mysql.createConnection(con);                                               
  connection.connect(function(err) {              
    if(err) {                                     
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); 
    }                                     
  });                                                                            
  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
      handleDisconnect();                         
    } else {                                      
      throw err;                                  
    }
  });
}
handleDisconnect();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors());

// DECLARE JWT-secret
const JWT_Secret = 'N9ovnFhqCo';

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
	/* */
	res.json({'ip': '192.168.0.1'});
})

app.get('/get-settings', (req, res) =>
{
	con.query("select * from settings", function (err, result, fields) {
	if(req.headers.authorization)
		res.json(result);
	else
		res.json({ message: 'Error' });
    });
})

app.get('/get-media-by-search', (req, res) =>
{
	let search = req.query.search;
	let num_results_per_page = req.query.num_results_per_page;
	
	let queryString = "select * from media where active = 1 ";
	queryString += " and title like '%"+ search +"%' order by created_at desc limit 0, "+ num_results_per_page;
	
	con.query(queryString, function (err, result, fields) {
	if(req.headers.authorization)
		res.json(result);
	else
		res.json({ message: 'Error' });
    });
})

app.get('/get-media', (req, res) =>
{
	let num_results_per_page = req.query.num_results_per_page;
	let queryString = "select * from media mda, media_likes mdalike, comments cmt ";
	queryString += " where active = 1 and mdalike.media_id =mda.id and  cmt.media_id = mda.id ";
	queryString += " order by mda.created_at desc limit 0, ? ";
	con.query(queryString, [num_results_per_page], function (err, result, fields) {
	if(req.headers.authorization)
		res.json(result);
	else
		res.json({ message: 'Error' });
    });
})

app.get('/get-catergory', (req, res) =>
{
	let queryString = "select * from categories ctg order by ctg.order ASC ";
	con.query(queryString, function (err, result, fields) {
	if(req.headers.authorization)
		res.json(result);
	else
		res.json({ message: 'Error' });
    });
})

app.get('/get-page', (req, res) =>
{
	let queryString = "select * from pages ";
	con.query(queryString, function (err, result, fields) {
	if(req.headers.authorization)
		res.json(result);
	else
		res.json({ message: 'Error' });
    });
})

app.get('/get-user-by-email', (req, res) =>
{
	let queryString = "select * from users where email = ? ";
	let email = req.query.email;
	let auth_token = req.query.auth_token;
	//console.log(email);
	
	con.query(queryString, [email], function (err, result, fields) {
	if(req.headers.authorization)
		res.json(result);
	else
		res.json({ message: 'Error' });
    });
})

app.get('/get-point-by-userid', (req, res) =>
{
	let queryString = "select sum(points) points from points where user_id = ? ";
	let userId = req.query.userId;
	let auth_token = req.query.auth_token;
	//console.log(email);
	
	con.query(queryString, [userId], function (err, result, fields) {
	if(req.headers.authorization)
		res.json(result);
	else
		res.json({ message: 'Error' });
    });
})

app.get('/get-categories', (req, res) =>
{
	let queryString = "select * from categories order by id asc ";
	
	con.query(queryString, function (err, result, fields) {
	if(req.headers.authorization)
		res.json(result);
	else
		res.json({ message: 'Error' });
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
