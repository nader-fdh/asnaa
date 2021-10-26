const express = require('express');
// const demandeAchat = require('../models/demandeAchat');
const DemandeAchat = require('../models/demandeAchat');

require('dotenv').config({ path: './.env' });

const router = express.Router();

// post a new demande d'achat
router.post('/', (req, res) => {
  let newDemandeAchat = new DemandeAchat({ ...req.body, owner: req.userId });
  newDemandeAchat
    .save()
    .then(demandeAchat => {
      res.status(200).send(demandeAchat);
    })
    .catch(err => {
      console.log(err.message);
      res.status(500).send({ msg: 'server error' });
    });
});

// get all demande d'achat
router.get('/', (req, res) => {
  DemandeAchat.find()
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({ msg: 'server error' });
    });
});

// find one demande d'achat by id
router.get('/:id', (req, res) => {
  DemandeAchat.findById(req.params.id)
    .then(data => res.send(data))
    .catch(err => res.status(500).json({ msg: 'server error' }));
});

// Delete demande d'achat
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  DemandeAchat.findByIdAndDelete(id)
    .then(data => res.json({ msg: 'Demande d achat deleted' }))
    .catch(err => res.status(500).send(err));
});

// update demande d'achat router
router.put('/:id', (req, res) => {
  const id = req.params.id;
  DemandeAchat.findByIdAndUpdate(id, { ...req.body })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({ msg: 'server error' });
    });
});

module.exports = router;
