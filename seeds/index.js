const sequelize = require('../config/sequelize');
const mirumData = require('./mirumData;');

const putInData =async () => {
    await sequelize.sync({ force: true});
    await mirumData();
    process.exit(0);
}

putInData();
