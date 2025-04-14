const mongoose = require('mongoose');

// Här definierar vi strukturen för varje rätt
const dishSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  ingredients: [String],
  preparationSteps: [String],
  cookingTime: Number,
  origin: String,
  spiceLevel: String // Det här är ett eget fält som visar hur stark rätten är
});

// Exporterar modellen så vi kan använda den i andra filer
module.exports = mongoose.model('Dish', dishSchema);
