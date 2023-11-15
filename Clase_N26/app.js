
const express = require('express');
const path = require('path');
const app = express();

const port = 4000;
app.get('/', (req, res)=>{
    res.send('Hola Mundo');

});
app.listen(port, ()=> {
    console.log(`El puerto está CORRIENDO en http://localhost:${port}`
    );
});

/*const app = express();
//...
//const port =4000;*/

app.get('/home', (req, res) => {
    res.send('Hola Mundo, estamos en Home - Probando las actualizaciones de nodemon');
});
/*
app.listen(port, () => {
    console.log(`El puerto esta CORRIENDO en http://localhost:4000` )});*/

app.use(express.static('./test-app/public'));
