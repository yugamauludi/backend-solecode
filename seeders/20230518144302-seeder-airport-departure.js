'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    let data = require('../data/airport_data.json')
    data.forEach((item)=>{
      item.createdAt = new Date()
      item.updatedAt = new Date()
    })
   await queryInterface.bulkInsert('AirportDepartures', data)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */s
    await queryInterface.bulkDelete('AirportDepartures', null)
  }
};
