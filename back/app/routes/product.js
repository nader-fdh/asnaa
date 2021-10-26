const express = require('express');
const Product = require('../models/product');
const User = require('../models/user.model');
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
  let newProduct = new Product({ name, description, createdAt, image, prix, category, longDescription, file: filesList });
  newProduct
    .save()
    .then(product => {
      res.status(200).send(product);
    })
    .catch(err => {
      console.log(err.message);
      res.status(500).json({ msg: 'server error' });
    });
});

// ghj
// router.post('/', (req, res) => {
//   let newProduct = new Product({ ...req.body, owner: req.userId });
//   newProduct
//     .save()
//     .then(product => {
//       res.status(200).send(product);
//     })
//     .catch(err => {
//       console.log(err.message);
//       res.status(500).send({ msg: 'server error' });
//     });
// });
// get all pruduct
router.get('/', (req, res) => {
  Product.find()
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({ msg: 'server error' });
    });
});

router.get('/user', (req, res) => {
  User.find()
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({ msg: 'server error' });
    });
});
router.get('/:id', (req, res) => {
  Product.findById(req.params.id)
    .then(data => res.send(data))
    .catch(err => res.status(500).json({ msg: 'server error' }));
});

// update product router (admin)
router.put('/:id', (req, res) => {
  const id = req.params.id;
  Product.findByIdAndUpdate(id, { ...req.body })
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
  Product.findByIdAndDelete(id)
    .then(data => res.json({ msg: 'Product deleted' }))
    .catch(err => res.status(500).send(err));
});

module.exports = router;
