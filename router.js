const express = require('express');
const router = express.Router();

const articulosRoutes = require('./views/articulosRoutes');
const fabricantesRoutes = require('./views/fabricantesRoutes');

//middleware routes

router.use('/articulos', articulosRoutes);
router.use('/fabricantes', fabricantesRoutes);

module.exports = router;