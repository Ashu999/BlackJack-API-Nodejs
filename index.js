const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const usersRouter = require('./routes/users');
const create_gameRouter = require('./routes/create_game');
const dealRouter = require('./routes/deal');
const insuranceRouter = require('./routes/insurance');
const hitRouter = require('./routes/hit');
const standRouter = require('./routes/stand');
const double_downRouter = require('./routes/double_down');
const splitRouter = require('./routes/split');
const game_statusRouter = require('./routes/game_status');
const winnerRouter = require('./routes/winner');
const finish_gameRouter = require('./routes/finish_game');
const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));

app.use(bodyParser.json());
app.use('/users', usersRouter);
app.use('/create_game', create_gameRouter);
app.use('/deal', dealRouter);
app.use('/insurance', insuranceRouter);
app.use('/hit', hitRouter);
app.use('/stand', standRouter);
app.use('/double_down', double_downRouter);
app.use('/split', splitRouter);
app.use('/game_status', game_statusRouter);
app.use('/winner', winnerRouter);
app.use('/finish_game', finish_gameRouter);

app.use(express.static(__dirname + '/public'));


app.use((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an BlackJack Server</h1></body></html>');
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});