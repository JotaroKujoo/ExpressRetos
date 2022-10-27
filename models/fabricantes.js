const { application } = require('express');
const {dataTypes, Model, DataTypes, INTEGER} = require('sequelize');
const sequelize = require('../db/db'); 

class fabricantes extends Model { };

fabricantes.init({
    codigo: {
        type: dataTypes.INTEGER,
        primarykey: true,
        allowNull: false,
        autoIncrement: true,
        }
    },
    nombre: DataTypes.STRING,
    {
        sequelize,
        modelName: "fabricantes",
        freezeTableNAme: true,
        timestamps:false,
    }
    {
        sequelize,
        modelName: "fabricantes",
        freezeTableNAme: true,
        timestamps:false,
    };
)
);
