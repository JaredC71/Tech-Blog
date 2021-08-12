const { User } = require('../models');

const userData = [
    {
        username: 'Mac22',
        password: 'frindle7'
    },
    {
        username: 'CactusJack',
        password: 'ASTROWORLD'
    },
    {
        username: 'Pineapple89',
        password: 'BeautifulSoup'
    },
    {
        username: 'BongoTheClown',
        password: 'HappyWifeHappyLife'
    },
    {
        username: 'TOP5_TOP5_TOP5',
        password: 'MoneyMoves'
    }
];

const seedUsers = () => User.bulkCreate(userData);


module.exports = seedUsers;