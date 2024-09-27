const mongoose = require('mongoose');

const consultationSchema = new mongoose.Schema({
    patientName: { type: String, required: true },
    consultationNotes: { type: String, required: true },
    consultationDate: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Consultation', consultationSchema);
