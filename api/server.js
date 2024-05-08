const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors(), bodyParser.json(), express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.post('/', (req, res) => {
    console.log('req');
    console.log(req.body);
    res.status(200).send('ok');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
