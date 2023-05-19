'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Schedule.belongsTo(models.Airport, { foreignKey: 'departure_airport' });
      // Schedule.belongsTo(models.Airport, { foreignKey: 'arival_airport' });
      Schedule.belongsTo(models.Airline, { foreignKey: 'airlineId' });
      Schedule.belongsTo(models.AirportDeparture, { foreignKey: 'airportDepartureId' });
      Schedule.belongsTo(models.AirportArrive, { foreignKey: 'airportArriveId' });
    }
  }
  Schedule.init({
    airlines: DataTypes.STRING,
    airlineId: DataTypes.INTEGER,
    departure_airport: DataTypes.STRING,
    airportDepartureId: DataTypes.INTEGER,
    departure_time: DataTypes.STRING,
    arival_airport: DataTypes.STRING,
    airportArriveId: DataTypes.INTEGER,
    arival_time: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Schedule',
  });
  return Schedule;
};