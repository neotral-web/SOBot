const chalk = require('chalk');

module.exports = client => { // eslint-disable-line no-unused-vars
console.log(chalk.bgGreen('Witaj Czacior!\nWitaj Czacior!'));
client.user.setActivity('cały serwer | v. 1.4.2', {type: 'WATCHING'});
};
