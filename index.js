const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api'); 

// set up express app
const app = express(); 

app.use(bodyParser.json());

// prefix '/api'
app.use('/api', routes);

// listen for requests
app.listen(process.env.port || 4000, function(){
    console.log('Server running on port 4000');
}); 