/**
 * Require this module to access local project settings configurations.
 * This module SHOULD ONLY be used when local developping.
 */
var settings = require('./settings');
var colors = require('colors');

var isDev = true;//TODO;
var localSettingKey = isDev ? process.env.LOCAL_SETTING : null;

if (!localSettingKey) {
    console.log("Cannot find process.env.LOCAL_SETTING, this module thus cannot be used!");
    throw new Error('Local settings cannot be used.');
}

console.log('[NOTICE] '.red + '[Local Setting] Using local setting : '.yellow + ('\"' + localSettingKey + '\"').underline.magenta.italic + '.'.yellow);

module.exports = settings.CONFIG[localSettingKey] || {};


