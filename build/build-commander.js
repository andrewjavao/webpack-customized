// define build.js's arguments
var commander = require('commander')

commander
    .version('1.0.0')
    .option('-E, --env [value]', 'build enviroment', '')
    .option('-S, --settings [value]', 'local settings', '')
    .parse(process.argv);

module.exports = {
    env: commander.env,
    localSettings: commander.settings
};

