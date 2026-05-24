const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.port || 8080;

app.set('view engine', 'hbs'); // para usar handlebars con express
hbs.registerPartials(__dirname + '/views/partials');
// para servir contenido estatico
app.use(express.static('public')); // definicion de middleware express. si public esta en otro sitio especificar path

app.get('/', (req, res) => {
    res.render('home', { // estos son los argumentos
        nombre: 'Grupo 5',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', { 
        nombre: 'Grupo 5',
        titulo: 'Curso de Node'
    });});

app.get('/elements', (req, res) => {
    res.render('elements', { 
        nombre: 'Grupo 5',
        titulo: 'Curso de Node'
    });
});

app.use((req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});