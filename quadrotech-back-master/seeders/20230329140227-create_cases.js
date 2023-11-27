"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("cases", [
      {
        title: "case 1 title",
        descript: "case 1 description",
        need: "BUSINESS NEED 1",
        result: "RESULT 1",
        keysinfo: "case key 1",
        imgMain: "https://api.dev.quadro-tech.com/back_case1.png",
        imgCase: "https://api.dev.quadro-tech.com/case1.png",
      },
      {
        title: "case 2 title",
        descript: "case 2 description",
        need: "BUSINESS NEED 2",
        result: "RESULT 2",
        keysinfo: "case key 2",
        imgMain: "https://api.dev.quadro-tech.com/back_case2.png",
        imgCase: "https://api.dev.quadro-tech.com/case2.png",
      },
      {
        title: "case 3 title",
        descript: "case 3 description",
        need: "BUSINESS NEED 3",
        result: "RESULT 3",
        keysinfo: "case key 3",
        imgMain: "https://api.dev.quadro-tech.com/back_case3.png",
        imgCase: "https://api.dev.quadro-tech.com/case3.png",
      },
      {
        title: "case 4 title",
        descript: "case 4 description",
        need: "BUSINESS NEED 4",
        result: "RESULT 4",
        keysinfo: "case key 4",
        imgMain: "https://api.dev.quadro-tech.com/back_case4.png",
        imgCase: "https://api.dev.quadro-tech.com/case4.png",
      },
      {
        title: "case 5 title",
        descript: "case 5 description",
        need: "BUSINESS NEED 5",
        result: "RESULT 5",
        keysinfo: "case key 5",
        imgMain: "https://api.dev.quadro-tech.com/back_case5.png",
        imgCase: "https://api.dev.quadro-tech.com/case5.png",
      },
      {
        title: "case 6 title",
        descript: "case 6 description",
        need: "BUSINESS NEED 6",
        result: "RESULT 6",
        keysinfo: "case key 6",
        imgMain: "https://api.dev.quadro-tech.com/back_case6.png",
        imgCase: "https://api.dev.quadro-tech.com/case6.png",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("cases", null, {});
  },
};
