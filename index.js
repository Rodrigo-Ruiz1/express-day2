'use strict';

const http = require('http');
const hostname = "127.0.0.1";
const port = 3000;

const express = require('express');
const app = express();

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', './views');
app.set('view engine', 'html');


const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});

const rootController = require('./routes/index');
const catsController = require('./routes/cats');
const dogsController = require('./routes/dogs');
const catsAndDogsController = require('./routes/cats_and_dogs')

app.use('/', rootController); // <- Root Route
app.use('/cats', catsController);
app.use('/dogs', dogsController);
app.use('/cats_and_dogs', catsAndDogsController);