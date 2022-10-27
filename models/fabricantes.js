
const { Model, DataTypes} = require('sequelize');
const sequelize = require('../db/db'); 

class Fabricantes extends Model { };

Fabricantes.init({
    codigo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nombre: DataTypes.STRING
},{
    sequelize,
    modelName:"fabricantes",
    freezeTableName: true,
    timestamps: false
});

module.exports = Fabricantes;