const express = require('express');
const mongoose = require('mongoose');
const app = express();


app.use(express.static('public'))

require('dotenv').config();


mongoose.connect(process.env.mongo_url).then(() => {
    console.log('mongodb connected');
})


const router = require('./routes/blog');

app.use(router);


const port = 4000;

app.listen(port, () => {
    console.log(`app running on port ${port}`);
})
