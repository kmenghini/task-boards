const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

const db = require('../db/index.js');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//get boards for a user
app.get('/user/:username/all', (req, res) => {
  let username = req.params.username;
  db.getAllBoardsForUser(username, result => {
    res.json(result);
  });
});

app.get('/board/:board', (req, res) => {
  let board = req.params.board;
  db.getAllContainersForBoard(board, result => {
    // console.log('board request in server', result);
    res.json(result);
  });
});

app.get('/container/:container', (req, res) => {
  let container = req.params.container;
  db.getAllTasksForContainer(container, result => {
    // console.log('container request in server',result);
    res.json(result);
  });
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
