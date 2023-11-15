//const { create } = require('domain');
const http = require('http');
const fs = require('fs');
const {__dirname} = require('path');
/*const server = http.createServer((req, res) => {
    res.writeHead(200, { 
      
        'Content-Type': 'text/plain'});
    
    res.end('Hello World! Te saludo desde la Terminal');
  });
  
  server.listen(3000, ()=>{
    console.log('Servidor corriendo en puerto http://localhost:3000')
  });
  
  
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 
        'Content-Type': 'text/html; charset= utf-8'});
    
    res.end('<h1>Bienvenidos al documento Html</h1><p>Parrafo de archivo html</p>');
  });
  
  server.listen(3000, ()=>{
    console.log('Servidor corriendo en puerto http://localhost:3000')
  });
  */
  const server = http.createServer((req, res) => {
    const file = fs.readFileSync(__dirname + '/index.html');
    res.writeHead(200, { 
        'Content-Type': 'text/html; charset= utf-8'});
    
    //res.end('<h1>Bienvenidos al documento Html</h1><p>Parrafo de archivo html</p>');
    res.end(file);
  });
  
  server.listen(3000, ()=>{
    console.log('Servidor corriendo en puerto http://localhost:3000')
  });
  
  
  //import http from 'node:http';
  
  /* Create a local server to receive data from
  const server = http.createServer();
  
  // Listen to the request event
  server.on('request', (request, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      data: 'Hello World!',
    }));
  });
  
  server.listen(8000);*/
  
  
  