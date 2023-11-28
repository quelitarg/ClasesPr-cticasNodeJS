const express = require('express');
const multer = require('multer');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

const app = express();
const upload = multer({dest: 'uploads/'});
const port = 3000;

// Configuración del motor de vistas
app.set('view engine', 'ejs')

//Config la carpta public
app.set(express.static('public'))

//para procesar datos enviados desde el formulario
app.use(express.urlencoded({ extended: true}))
app.use(express.json()) 

//seteamos las variables de entorno
dotenv.config({path: './env/.env'}); 

//cookieParser.set
 app.set('cookieParser');
 
 //Ruta base para probar todo
app.get('/', (req, res) => {
    res.send('Hola Mundo');
  });

  // Ruta para mostrar el formulario de carga de archivos
app.get('/home', (req, res) => {
    res.render('home');
  });

/*app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/upload', upload.fields([{name: 'archivo'}, {name: 'archivo'},{name: 'archivo'}]), (req, res) =>  {

    console.log('Imágenes subidas con éxito');
    res.send('Archivos subidos con éxito');
});*/

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
  });