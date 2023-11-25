const express = require('express');
const app = express();
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override')
const fs = require('fs');
const PORT = 3000;

//leer mis archivos estaticos desde public
app.use(express.static('public'));

/// Configuracion ejs
app.set('view engine', 'ejs');
app.set('views', './src/views');

//conf Layouts
app.use(expressLayouts);
app.set('layout', 'layouts/layout');

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

//lectura de Ruta de tareas
app.use(require('./src/routes/tareasRouter'));

app.listen(PORT, () => {
    console.log(`El servidor esta corriendo el puerto 3000  http://localhost:${PORT}` )});