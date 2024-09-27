const Consultation = require('../models/consultationModel');

// Get all consultations
const getAllConsultations = async () => {
    return await Consultation.find({});
};

// Add a new consultation
const addConsultation = async (consultationData) => {
    const consultation = new Consultation(consultationData);
    return await consultation.save();
};

module.exports = {
    getAllConsultations,
    addConsultation
};
