
const {Model, DataTypes} = require('sequelize')
const sequelize = require('../db/db') 

class Articulos extends Model {}

Articulos.init({
    codigo:{
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey: true
    },
    nombre: DataTypes.STRING,
    precio: DataTypes.INTEGER,
    codigo_fabricante: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

},{
    sequelize,
    modelName: "fabricantes",
    freezeTableName: true,
    timestamps: false
})

module.exports = Articulos
