const express = require('express')
const mongoose = require('mongoose');

const app = express()
const port = 3001;

const userRoute = require('./routes/user.route');

mongoose.connect('mongodb://localhost/trading-items', {useNewUrlParser: true});

app.get('/', (req, res) => res.send('Hello World! Trading-items'));

app.use('/users', userRoute)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))