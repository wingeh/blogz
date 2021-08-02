const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
const exhbs = require('express-handlebars');
const hbs = exhbs.create({});
const path = require('path');
const dotenv = require('dotenv').config()
const sequelize = require('./config/connection');
const { url } = require('inspector');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: process.env.SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: false,
  store: new SequelizeStore({
    db: sequelize
  })
};
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));


//post request 

app.post('/api'), (request,response)=> { 
  console.log(request);
}
app.use(session({
  secret: process.env.SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: false,
  store: new SequelizeStore({
    db: sequelize
  })
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});