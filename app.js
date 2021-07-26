require('dotenv').config();
const path = require('path');
const express = require('express');
const createError = require('http-errors');
const logger = require('morgan');
const favicon = require('serve-favicon');

const cookieParser = require('cookie-parser');
const hbs = require('hbs');
const mongoose = require('mongoose');

// Aquí se configura la database
require('./configs/db.config');

// Establecer routes
const indexRouter = require('./routes/home.routes');
const authRouter    = require('./routes/auth.routes')
const categoriaRouter = require('./routes/categoria.routes') 
const productoRouter = require('./routes/producto.routes')

const app = express();

//Generación de sesión
require("./configs/session.config")(app)

// Configurar Express View engine 

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);
//solo sirve cuando trabajo en local

///Layout Middleware
app.use((req, res, next) => {
  res.locals.usuarioActual = req.session.usuarioActual
    next()
})
// Routes middleware
app.use('/', indexRouter)
app.use('/', authRouter)
app.use('/', categoriaRouter)
app.use('/', productoRouter)

// Detectar rutas faltantes y reenviar un error
app.use((req, res, next) => next(createError(404)));

// Captura todo el error handler
app.use((error, req, res) => {

  // Establecer información de error

  res.locals.message = error.message;
  res.locals.error = req.app.get('env') === 'development' ? error : {};

  // Renderizar el error page
  res.status(error.status || 500);
  res.render('error');
});

module.exports = app;
