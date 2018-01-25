const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const routes = require('./server/routes');
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended:false }));

app.use(methodOverride('_method'));

app.use(session({
  name: 'session_id',
  secret: 'canyoukeepasecret',
  resave: 'false',
  saveUninitialized: false,
  cookie: {
    expires: 600000
  }
}));

app.use('/', routes);

const port = 3000;
app.listen(port, () => {
  console.log(`http://localhost${port}`);
});
