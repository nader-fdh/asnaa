const mongoose = require('mongoose');
const DemeandeAchatSchema = mongoose.Schema({
  email: String,
  firstName: String,
  lastName: String,
  adress: String,
  city: String,
  ville: String,
  phoneNumber: Number,
  codePostal: Number,
  total: Number,
  productId: Array,
  createdAt: Date,
});

module.exports = mongoose.model('demandeAchat', DemeandeAchatSchema);
