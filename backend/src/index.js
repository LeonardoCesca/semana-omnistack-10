const express = require('express');
const moongose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

moongose.connect('mongodb+srv://omnistack:omnistack@cluster0-ywd1g.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes); 

app.listen(3333);
