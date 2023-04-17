const { DataTypes } = require('sequelize');
module.exports=(sequelize)=>{
    sequelize.define('temperaments', {
        ID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
          },
          Nombre: {
            type: DataTypes.TEXT,
            allowNull: false,
          },
    })

}