const { application } = require('express');
const {dataTypes, Model, DataTypes} = require('sequelize')
const sequelize = require('../db/db') 

class articulos extends Model {}

articulos.init({
    codigo: {
        type: DataTypes.INTEGER,
        primarykey: true,
        allowNull: false,
        autoIncrement: true,
        }
    },
    nombre: DataTypes.VARCHAR,
    precio: DataTypes.INTEGER,
    fabricante: DataTypes.INTEGER,
    foreingkey: true,

    {
        sequelize,
        modelName: "articulos",
        freezeTableNAme: true,
        timestamps:false,
    }
)

