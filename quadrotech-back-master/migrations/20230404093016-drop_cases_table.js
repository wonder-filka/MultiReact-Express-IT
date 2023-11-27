"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Удаляем таблицу cases
    await queryInterface.dropTable("cases");
    await queryInterface.createTable("cases", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.TEXT,
      },
      descript: {
        type: Sequelize.TEXT,
      },
      need: {
        type: Sequelize.TEXT,
      },
      result: {
        type: Sequelize.TEXT,
      },
      keysinfo: {
        type: Sequelize.TEXT,
      },
      imgMain: {
        type: Sequelize.STRING,
      },
      imgCase: {
        type: Sequelize.STRING,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Создаем таблицу cases с помощью метода createTable
    await queryInterface.dropTable("cases");
  },
};
