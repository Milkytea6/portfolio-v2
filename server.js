const express = require('express');

const path = require('path');

const sequelize = require('./config/connections');// Imports sequelize connection

const exphbs = require('express-handlebars');// Handlebars import

const routes = require('./controllers')// Imports routes from controllers folder
const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});// Handlebars function

app.use(routes);// Allows routes to be called


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);// Handlebars engine
app.set('view engine', 'handlebars');


sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });