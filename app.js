const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'home.html')));
app.listen(port, () => console.log('Servidor funcionando en el puerto '+ port));