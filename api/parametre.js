const express = require('express');
const router = express.Router();
const parametreService = require('../services/parametreService');

// Get all settings
router.get('/', async (req, res) => {
    try {
        const settings = await parametreService.getAllSettings();
        res.status(200).json(settings);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving settings' });
    }
});

// Update settings
router.post('/', async (req, res) => {
    try {
        const updatedSettings = await parametreService.updateSettings(req.body);
        res.status(200).json(updatedSettings);
    } catch (error) {
        res.status(400).json({ message: 'Error updating settings' });
    }
});

module.exports = router;
