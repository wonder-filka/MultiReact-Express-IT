"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("cases", "visible", {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    });
    await queryInterface.sequelize.query("UPDATE cases SET visible = true;");
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("cases", "visible");
  },
};
