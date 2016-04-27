'use strict';

const yargs = require('yargs');
const express = require('express');
const app = express();
const port = yargs.argv.port || process.argv[2] || 3000;

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
	res.redirect('/index.html');
});

app.use(express.static('.'));

app.listen(port, () => {
	console.log('Server listening on port ' + port + ' ...');
});