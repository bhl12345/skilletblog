const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  text: String,
  author: String,
}, {
  timestamps: true,
});

module.exports = mongoose.model('Message', messageSchema);