'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Card.init({
    name: DataTypes.STRING,
    hp: DataTypes.STRING,
    type: DataTypes.STRING,
    icon: DataTypes.STRING,
    picture: DataTypes.STRING,
    pop: DataTypes.STRING,
    move_one: DataTypes.STRING,
    dam_one: DataTypes.STRING,
    desc_one: DataTypes.STRING,
    en_one_on: DataTypes.STRING,
    en_one_tw: DataTypes.STRING,
    en_one_th: DataTypes.STRING,
    move_two: DataTypes.STRING,
    dam_two: DataTypes.STRING,
    desc_two: DataTypes.STRING,
    en_two_on: DataTypes.STRING,
    en_two_tw: DataTypes.STRING,
    en_two_th: DataTypes.STRING,
    weak: DataTypes.STRING,
    str: DataTypes.STRING,
    description: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Card',
    tableName: 'cards',
    timestamps: false
  });
  return Card;
};