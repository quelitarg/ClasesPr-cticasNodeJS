const express = require('express');
const app = express();
const path = require('path');
const mainRoutes = require('./src/routes/mainRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const PORT = 3000;

/*Archivos estáticos*/
app.use(express.static('public'));

/*View Engine*/
app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views');

//rutas
/* Rutas */
app.use('/', mainRoutes);
app.use('/api',adminRoutes);

/*app.get('/', (req, res)=> {
    res.render('home', req.query);
});*/

app.use((req, res) => {
    res.status(404).send('Lo sentimos, página no encontrada!');
})

app.listen(PORT, ()=> console.log(`Servidor corriendo en http://localhost:${PORT}`));