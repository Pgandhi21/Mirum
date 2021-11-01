const Sequelize = require('sequelize')

const sequelize = require('../db/database')

const User = sequelize.define('user', {

	user_id:{
        
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
	},

	
	username: { type: Sequelize.STRING(35), 
		allowNull:false,
		unique: true
	},

	
	passwd: { type: Sequelize.STRING(20),
		allowNull:false },

	
	myDate: { type: Sequelize.DATE,
			defaultValue: Sequelize.NOW },

	
	createdAt: Sequelize.DATE,
	updatedAt: Sequelize.DATE,
})

module.exports = User

