const express = require('express');
const router = express.Router();
const consultationService = require('../services/consultationService');

// Get all consultations
router.get('/', async (req, res) => {
    try {
        const consultations = await consultationService.getAllConsultations();
        res.status(200).json(consultations);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving consultations' });
    }
});

// Add a new consultation
router.post('/', async (req, res) => {
    try {
        const newConsultation = await consultationService.addConsultation(req.body);
        res.status(201).json(newConsultation);
    } catch (error) {
        res.status(400).json({ message: 'Error adding consultation' });
    }
});

module.exports = router;
