const express = require("express")
const router = express.Router()

const Fabricantes = require("../models/fabricantes")

//CRUD READ

router.get('/getfabricantes', (req, res) => {Fabricantes.findAll().then(res.send('Hola estas en fabricantes')) });

module.exports = router