const express = require('express');
const Devis = require('../models/devis');
const multer = require('multer');
require('dotenv').config({ path: './.env' });

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './app/uploads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

// post a new devis router
router.post('/', upload.array('photos', 10), (req, res) => {
  let filesList = req.files.map(file => (path = `${req.protocol}://${req.hostname}:8081/app/uploads/${file.filename}`));
  let myBody = JSON.parse(req.body.input);
  const { name, type, materiau, epaisseur, peinture, conception, quantité } = myBody;
  console.log(myBody);
  let newDevis = new Devis({ name, type, materiau, epaisseur, peinture, conception, quantité, file: filesList });
  newDevis
    .save()
    .then(devis => {
      res.status(200).send(devis);
    })
    .catch(err => {
      console.log(err.message);
      res.status(500).json({ msg: 'server error' });
    });
});

// get all devis
router.get('/', (req, res) => {
  Devis.find()
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({ msg: 'server error' });
    });
});

module.exports = router;
