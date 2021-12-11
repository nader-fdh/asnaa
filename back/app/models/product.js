const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema({
  owner: {
    type: mongoose.Types.ObjectId,
    ref: 'Admin',
  },
  name: String,
  description: String,
  longDescription: String,
  image: String,
  prix: Number,
  category: String,
  createdAt: Date,
  file: Array,
});

module.exports = mongoose.model('product', ProductSchema);
