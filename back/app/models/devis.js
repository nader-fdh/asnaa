const mongoose = require('mongoose');
const DevisSchema = mongoose.Schema({
  materiau: String,
  name: String,
  epaisseur: String,
  peinture: String,
  conception: String,
  quantité: String,
  type: String,
  file: Array,
});

module.exports = mongoose.model('devis', DevisSchema);
