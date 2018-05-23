const express = require('express');
const router = express.Router(); 
const mysql = require('mysql');
//const bodyParser = require('body-parser');

// create application/json parser
//var jsonParser = bodyParser.json();

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'mgptest'
});
connection.connect();

// get list of users from the db
router.get('/users', function(req, resp){
    connection.query('SELECT id, name, email from users', function (error, results, fields) {
        if (error) throw error;
        //console.log(results);
        console.log(req.body);
        resp.send({results: results});
    });
    
    connection.end();
    
    //console.log(req.body);
    //resp.send({type: 'GET'});
});

// add a new user 
router.post('/users', function(req, resp){
    console.log(req.body);
    resp.send({type: 'POST'});

    //if (!req.body) return resp.sendStatus(400);
});

// update a new user
router.put('/users/:id', function(req, resp){
    resp.send({type: 'PUT'});
});

// delete a new user
router.delete('/users/:id', function(req, resp){
    resp.send({type: 'DELETE'});
});

module.exports = router;