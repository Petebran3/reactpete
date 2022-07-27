const express = require('express')
const cors=require('cors')
const app = express();
const mysql = require('mysql');
app.use(cors())
const connection = mysql.createConnection({
    host: 'database-1.csyl7ea5qdf5.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'Password',
    database: 'my_db',
    port: '3306'

});

connection.connect((err)=>{
    if (err) {
        console.log(err.message);
        return;
    }
    console.log('peteProb')
});
app.get('/products',(req, res) => {
    const query = 'SELECT * FROM Products'
    connection.query(query, (err, result) =>{
        if(err){
            throw err
        }else{
            res.send(result)
        }
    })
})



app.listen(5000, (error) => {
    if(error){ 
        throw error
    }else{console.log('connected to server')}
})