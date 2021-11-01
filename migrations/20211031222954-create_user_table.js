'use strict';

// const { QueryInterface } = require("sequelize/types");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("user_table", {
      user_id:{
        
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
	},
    content: Sequelize.STRING(300),
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    })
  },

  down: async (queryInterface, Sequelize) => {
    return QueryInterface.dropTable("user_table");
  
  }
};
