import express from 'express'
import route from './api/index.js';
import mysql from 'mysql2'

const app = express();



app.use(express.json(), express.urlencoded( {extended: true}));


// app.use('/api', route);


const port = 5000;
port
app.use(express.json());
app.use(express.urlencoded({
  extended: true,
  limit: "15mb"
})); 

const pool = mysql.createPool({
  host     : 'sql12.freemysqlhosting.net',
  user     : 'sql12608372',
  password : '',
  database : 'sql12608372'
});



pool.getConnection( (err, connection) => {
  if (err) {
    console.log(err);
}
  console.log('Database is connected successfully !');
  pool.releaseConnection(connection);
});






app.listen(port, ()=>{
    console.log(`Server is working on port ${port}` )
});


export default pool;