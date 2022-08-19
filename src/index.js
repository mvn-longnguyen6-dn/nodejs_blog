

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
var exphbs = require('express-handlebars');

const route = require('./routes');

const app = express();
const port = 3000;

// Use static folder
app.use(express.static(path.join(__dirname, 'public')));

// Template engine
app.engine('.hbs', exphbs.engine({ extname: '.hbs', defaultLayout: "main"}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//Route
route(app);

// app.get('/', (req, res) => {
//   res.render('home');
// });
// app.get('/search', (req, res) => {
//   res.render('search');
// });
app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`),
);
