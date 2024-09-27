const Settings = require('../models/parametreModel');

// Get all settings
const getAllSettings = async () => {
    return await Settings.find({});
};

// Update settings
const updateSettings = async (settingsData) => {
    return await Settings.updateOne({}, settingsData);
};

module.exports = {
    getAllSettings,
    updateSettings
};
