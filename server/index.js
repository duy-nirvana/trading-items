const express = require('express')
const mongoose = require('mongoose');

const app = express()
const port = 3001;

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))