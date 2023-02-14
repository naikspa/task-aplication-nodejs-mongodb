import express from 'express';
import indexRoutes from './routes/index.routes';
import path from 'path';
//import exphbs from 'express-handlebars';
let exphbs = require('express-handlebars');
import html from 'html';
import morgan from 'morgan';

const app = express();

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine(
  '.hbs',
  exphbs.engine({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    //partialsDir: path.join(app.get("views") "partials"),
  })
);
app.set('view engine', '.hbs');

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(indexRoutes);

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

export default app;
