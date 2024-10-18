const express = require('express');
const mongoose = require('mongoose');
const app = express();


app.use(express.static('public'))

require('dotenv').config();


mongoose.connect(process.env.mongo_url).then(() => {
    console.log('mongodb connected');
})


const router = require('./routes/blog');

app.use('/api/', router);


const port = 3000;

app.listen(port, () => {
    console.log(`app running on port ${port}`);
})
