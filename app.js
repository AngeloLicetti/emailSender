const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const configMensaje = require('./configMensaje');
const configCobranza = require('./configCobranza');
const configPrestamo= require('./configPrestamo');
const configCredenciales= require('./configCredenciales');

const app = express();
app.use(bodyParser.json());
app.use(cors())
app.post('/formulario', (req, res) => {
    configMensaje(req.body);
    res.status(200).send();
})
app.post('/cobranza', (req, res) => {
    configCobranza(req.body);
    res.status(200).send();
})
app.post('/prestamos', (req, res) => {
    configPrestamo(req.body);
    res.status(200).send();
})
app.post('/credenciales', (req, res) => {
    configCredenciales(req.body);
    res.status(200).send();
})
app.listen(3000, () => {
    console.log('Servidor corriendo')
});