const sequelize = require('./db/database')
	
const User = require('./models/user')

sequelize.sync()
	
sequelize.sync({force:true})

