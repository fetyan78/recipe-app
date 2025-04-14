const express = require('express');
const router = express.Router();
const Dish = require('../models/Dish');

// Hämtar alla rätter från databasen
router.get('/', async (req, res) => {
  const dishes = await Dish.find();
  res.json(dishes);
});

// Hämtar en specifik rätt baserat på namn
router.get('/:name', async (req, res) => {
  const dish = await Dish.findOne({ name: req.params.name });
  if (!dish) return res.status(404).send('Dish not found');
  res.json(dish);
});

// Lägger till en ny rätt om den inte redan finns
router.post('/', async (req, res) => {
  const exists = await Dish.findOne({ name: req.body.name });
  if (exists) return res.status(409).send('Dish already exists');

  const newDish = new Dish(req.body);
  await newDish.save();
  res.status(201).json(newDish);
});

// Uppdaterar en rätt via dess ID
router.put('/:id', async (req, res) => {
  const updated = await Dish.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updated) return res.status(404).send('Dish not found');
  res.json(updated);
});

// Tar bort en rätt via dess ID
router.delete('/:id', async (req, res) => {
  const deleted = await Dish.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).send('Dish not found');
  res.json({ message: 'Dish deleted' });
});

module.exports = router;
