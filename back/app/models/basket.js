const mongoose = require('mongoose');
const BasketSchema = mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  description: {
    type: String,
    // required: true,
  },
  longDescription: String,
  image: String,
  prix: String,
  category: String,
  createdAt: Date,
  file: Array,
});

module.exports = mongoose.model('basket', BasketSchema);
