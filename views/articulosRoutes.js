const express = require('express');
const router = express.Router();

const Articulos = require('../models/articulos')

//CRUD READ

router.get('/', (req, res) => {Articulos.findAll().then(res.send('Hola estás en artículos'))});

module.exports = router;