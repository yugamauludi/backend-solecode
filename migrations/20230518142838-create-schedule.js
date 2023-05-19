'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Schedules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      airlines: {
        type: Sequelize.STRING
      },
      airlineId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Airlines',
          key: 'id'
        },
        onDelete : 'cascade',
        onUpdate : 'cascade'
      },
      departure_airport: {
        type: Sequelize.STRING
      },
      airportDepartureId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'AirportDepartures',
          key: 'id'
        },
        onDelete : 'cascade',
        onUpdate : 'cascade'
      },
      departure_time: {
        type: Sequelize.STRING
      },
      arival_airport: {
        type: Sequelize.STRING,
      },
      airportArriveId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'AirportArrives',
          key: 'id'
        },
        onDelete : 'cascade',
        onUpdate : 'cascade'
      },
      arival_time: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Schedules');
  }
};