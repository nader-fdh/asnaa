const express = require('express');
const Basket = require('../models/basket');

const multer = require('multer');

require('dotenv').config({ path: './.env' });
// setting ...
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
// post a new product router (admin)
router.post('/', upload.array('photos', 10), (req, res) => {
  let filesList = req.files.map(file => (path = `${req.protocol}://${req.hostname}:8081/app/uploads/${file.filename}`));
  let myBody = JSON.parse(req.body.input);
  const { name, description, createdAt, image, prix, category, longDescription } = myBody;
  console.log(myBody);
  let newBasket = new Basket({ name, description, createdAt, image, prix, category, longDescription, file: filesList });
  newBasket
    .save()
    .then(Basket => {
      res.status(200).send(Basket);
    })
    .catch(err => {
      console.log(err.message);
      res.status(500).json({ msg: 'server error' });
    });
});

// get all pruduct
router.get('/', (req, res) => {
  Basket.find()
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({ msg: 'server error' });
    });
});

router.get('/:id', (req, res) => {
  Basket.findById(req.params.id)
    .then(data => res.send(data))
    .catch(err => res.status(500).json({ msg: 'server error' }));
});

// update product router (admin)
router.put('/:id', (req, res) => {
  const id = req.params.id;
  Basket.findByIdAndUpdate(id, { ...req.body })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({ msg: 'server error' });
    });
});

// Delete product
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Basket.findByIdAndDelete(id)
    .then(data => res.json({ msg: 'Basket deleted' }))
    .catch(err => res.status(500).send(err));
});

module.exports = router;
