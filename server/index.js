const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/cities', (req, res) => {
  
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
