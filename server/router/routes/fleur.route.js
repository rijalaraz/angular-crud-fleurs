const express = require('express');

const router = express.Router();
const fleursController = require('../../controllers/fleur.controller');

// Get all fleurs
router.get('/', fleursController.getFleurs);

// Get one fleur
router.get('/:id', fleursController.getFleur);

// Add one fleur
router.post('/', fleursController.addFleur);

// Update one fleur
router.put('/:id', fleursController.updateFleur);

// Delete one fleur
router.delete('/:id', fleursController.deleteFleur);


module.exports = router;