const path = require("path");
const express = require("express");
const exphbs = require('express-handlebars');
const app = express();
const routes = require('./controllers/')
const session = require('express-session');
const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
    secret: 'Super secret secret',
    cookie: { maxAge: 36000 },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess));
app.use(routes);

const PORT = process.env.PORT || 3001;

sequelize.sync({ force: false }).then(() => {

    app.listen(PORT, () => console.log("Now listening on http://localhost:3001"));

})

