const express = require('express')
const mongoose = require('mongoose');

const app = express()
const port = 3001;

const userRoute = require('./routes/user.route');
const productRoute = require('./routes/product.route');

mongoose.connect('mongodb://localhost/trading-items', {useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))

app.use('/api/users', userRoute);
app.use('/api.products', productRoute);

app.get('/', (req, res) => res.send('Hello World! Trading-items'));
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))