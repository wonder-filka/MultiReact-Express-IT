"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("content_en", {
      keyi18n: {
        type: Sequelize.TEXT,
      },
      value_en: {
        type: Sequelize.TEXT,
      },
    });
    await queryInterface.createTable("content_de", {
      keyi18n: {
        type: Sequelize.TEXT,
      },
      value_de: {
        type: Sequelize.TEXT,
      },
    });
    await queryInterface.createTable("content_es", {
      keyi18n: {
        type: Sequelize.TEXT,
      },
      value_es: {
        type: Sequelize.TEXT,
      },
    });
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
    await queryInterface.dropTable("content_en");
    await queryInterface.dropTable("content_de");
    await queryInterface.dropTable("content_es");
    await queryInterface.dropTable("cases");
  },
};
