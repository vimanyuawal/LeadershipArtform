var mysql = require('mysql2');
var migration = require('mysql-migrations');

// var connection = mysql.createPool({
//   connectionLimit : 10,
//   host     : process.env.RDS_HOSTNAME,
//   user     : process.env.RDS_USERNAME,
//   password : process.env.RDS_PASSWORD,
//   port     : process.env.RDS_PORT,
//   database : process.env.RDS_DB_NAME
// });

var connection = mysql.createPool({
  connectionLimit : 10,
  host     : 'localhost',
  user     : 'root',
  password : 'Pickoftheweek1!',
  database : 'Leadership_Artform'
});

migration.init(connection, __dirname + '/migrations');
