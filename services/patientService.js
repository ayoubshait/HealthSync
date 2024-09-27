const Patient = require('../models/patientModel');

// Get all patients
const getAllPatients = async () => {
    return await Patient.find({});
};

// Add a new patient
const addPatient = async (patientData) => {
    const patient = new Patient(patientData);
    return await patient.save();
};

module.exports = {
    getAllPatients,
    addPatient
};
