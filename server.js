const express = require('express');
const hbs = require('hbs');
var app = express();
//Gets port env variable set by heroku
const port = process.env.PORT || 3000;

app.set('view engine', 'hbs');
//Takes absolute path to the folder
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
  var now = new Date().toString();

  console.log(`${now}: `);
  next();
});

//route handlers
app.get('/', (req, res) => {
  //res.send('Hello Express!');
  res.send({
    name:'Boudreaux',
    things: ['books', 'scotch', 'tobacco']
  });
});

//Handle route by rendering handlebar template
app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  });
});

//Rather than hardcoding port we can use env variable provided by heroku
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
