const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  source: {
    type: String,
    enum: ['personality', 'book', 'movie'],
    required: true
  },
  sourceName: {
    type: String
  },
  // You can add more fields as needed
});

const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;
