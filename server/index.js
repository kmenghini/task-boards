const express = require('express');
const bodyParser = require('body-parser');

const db = require('../db/index.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../react-client/dist'));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

app.get('/:username/all', (req, res) => {
  let username = req.params.username;
  db.getAllBoardsForUser(username, result => {
    res.json(result);
  });
});