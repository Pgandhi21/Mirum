const { Mirum } = require('../models');

const mirumData = [
    {
        name:
    },
    {
        name:
    },
];

const seedMirum = () => Mirum.bulkCreate(mirumData);

module.exports = seedMirum;
