const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const { sendMail } = require('./mailer');

var fs = require('fs');
var util = require('util');
var log_file = fs.createWriteStream(__dirname + '/debug.log', { flags: 'w' });
var log_stdout = process.stdout;

console.log = function (d) {
    log_file.write(util.format(d) + '\n');
    log_stdout.write(util.format(d) + '\n');
};

const app = express();
const port = 3000;

app.use(cors(), bodyParser.json(), express.static(path.join(__dirname, '../build')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.post('*', (req, res) => {
    console.log('req');
    sendMail(req.body);
    res.setHeader('Content-Type', 'application/json');
    const response = JSON.stringify({ message: 'mail sent' });
    res.status(200).send(response);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
