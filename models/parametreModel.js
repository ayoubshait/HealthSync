const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    password: { type: String, required: true },
    language: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Settings', settingsSchema);
