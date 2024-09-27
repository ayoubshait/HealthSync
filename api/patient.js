const express = require('express');
const router = express.Router();
const patientService = require('../services/patientService');

// Get all patients
router.get('/', async (req, res) => {
    try {
        const patients = await patientService.getAllPatients();
        res.status(200).json(patients);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving patients' });
    }
});

// Add a new patient
router.post('/', async (req, res) => {
    try {
        const newPatient = await patientService.addPatient(req.body);
        res.status(201).json(newPatient);
    } catch (error) {
        res.status(400).json({ message: 'Error adding patient' });
    }
});

module.exports = router;
