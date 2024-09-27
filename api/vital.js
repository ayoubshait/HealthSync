const express = require('express');
const router = express.Router();
const vitalService = require('../services/vitalService');

// Get all vital data
router.get('/', async (req, res) => {
    try {
        const vitalData = await vitalService.getAllVitalData();
        res.status(200).json(vitalData);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving vital data' });
    }
});

// Add new vital data
router.post('/', async (req, res) => {
    try {
        const newVitalData = await vitalService.addVitalData(req.body);
        res.status(201).json(newVitalData);
    } catch (error) {
        res.status(400).json({ message: 'Error adding vital data' });
    }
});

module.exports = router;
