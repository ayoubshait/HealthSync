const Vital = require('../models/vitalModel');

// Get all vital data
const getAllVitalData = async () => {
    return await Vital.find({});
};

// Add new vital data
const addVitalData = async (vitalData) => {
    const vital = new Vital(vitalData);
    return await vital.save();
};

module.exports = {
    getAllVitalData,
    addVitalData
};
