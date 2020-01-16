const Sequelize = require("sequelize/types");
const Model = Sequelize.Model;

class biblioteca extends Model {}

biblioteca.init({
    libro: {
        type: Sequelize.toVarchar,
        allowNull: true
    },
    autor: {
        type: Sequelize.toVarchar,
        allowNull: true
    }
},
{
    sequile, modelName: 'biblioteca'
});