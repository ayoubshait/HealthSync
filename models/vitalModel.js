const mongoose = require('mongoose');

const vitalSchema = new mongoose.Schema({
    vitalType: { type: String, required: true },
    vitalValue: { type: Number, required: true },
    vitalUnit: { type: String, required: true },
    recordedAt: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Vital', vitalSchema);
