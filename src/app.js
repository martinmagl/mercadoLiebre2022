
// si yo quiero correr el archivo parado en otra carpeta, debo escriir la ruta relativa al menos. Es decir, "node ../app.js"
// si tengo que salir dos carpetas, hago dos veces "../"
// yo le doy un nombre(cualquiera sea) al script en package.json y le digo que tiene que ejecutar por ende cuando actualizo si utlizo nodemon se ejecuta solo.
// ¿como iniciar proyecto en nmp?
// como crear script 
// como levantar un servidor 
// resolver error git start


const express = require('express'); 
const path = require ('path');
const port = 3000;
const app = express();

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath) );

app.get("/", (req, res)=> res.sendFile(path.resolve(__dirname, './views/home.html')))
app.get('/login', (req,res)=>res.sendFile(path.resolve(__dirname + '/views/login.html')))
app.get('/register', (req,res)=>res.sendFile(path.resolve(__dirname + '/views/register.html')))

app.listen(port, () => console.log('Servidor corriendo en el puerto'+ port));