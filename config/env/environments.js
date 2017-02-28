/**
 * environment identifier key
 */
const ENV_KEY_NAME = "project_envs_settings";

/**
 * Configurations here
 */
var CONFIG = {
    "sample_env": {
        sample_settings: '${sample-settings} is set to this string in environment named \'sample-env\', this setting can be deleted any time.'
    }

    // add other environments here...

};

module.exports = {
    CONFIG: CONFIG,
    ENV_KEY_NAME: ENV_KEY_NAME
};

