const express = require('express');
const port = 2000;
const handlebar = require('express-handlebars');
const path = require('path');
const app = express();
const { Sequelize } = require('sequelize');
const router = express.Router();
const UserRouter = require('./routes/user');

app.engine(
    'hbs',
    handlebar({
        extname: '.hbs'
    }),
);

app.set('view engine', 'handlebars');
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
require('./database/connection')

app.listen(port, () => {
    console.log(`Project http://localhost:${port}`)
})

app.use('/api', UserRouter);