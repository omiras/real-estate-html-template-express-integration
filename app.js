const express = require('express');

// creamos una instancia del servidor Express
const app = express();

// Añadimos el middleware necesario para que el client puedo hacer peticiones GET a los recursos públicos de la carpeta 'public'
app.use(express.static('public'));

// motor de plantillas por defecto
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(3000, (req, res) => {
    console.log("Servidor escuchando correctamente en el puerto 3000");
});
