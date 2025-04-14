require('dotenv').config();
const mongoose = require('mongoose');
const Dish = require('./models/Dish');

const CONNECTION_URL = process.env.CONNECTION_URL;

// Här är de rätter vi vill lägga in i databasen
const dishes = [
  {
    name: "Pho Bo",
    ingredients: ["oxbuljong", "risnudlar", "biff", "lök", "koriander"],
    preparationSteps: ["Koka buljong", "Lägg i nudlar och kött", "Toppa med örter"],
    cookingTime: 120,
    origin: "Vietnam",
    spiceLevel: "Mild"
  },
  {
    name: "Jollof Rice",
    ingredients: ["ris", "tomatpuré", "lök", "paprika", "kryddor"],
    preparationSteps: ["Stek grönsaker", "Tillsätt ris och vatten", "Koka under lock"],
    cookingTime: 45,
    origin: "Nigeria",
    spiceLevel: "Stark"
  },
  {
    name: "Ceviche",
    ingredients: ["vit fisk", "limejuice", "lök", "chili", "koriander"],
    preparationSteps: ["Marinera fisken i lime", "Blanda i grönsaker", "Servera kall"],
    cookingTime: 30,
    origin: "Peru",
    spiceLevel: "Medium"
  },
  {
    name: "Okonomiyaki",
    ingredients: ["kål", "mjöl", "ägg", "fläsk", "sås"],
    preparationSteps: ["Blanda smet", "Stek i panna", "Ringla sås ovanpå"],
    cookingTime: 20,
    origin: "Japan",
    spiceLevel: "Mild"
  },
  {
    name: "Makloubeh",
    ingredients: ["ris", "aubergine", "lamm", "kanel", "buljong"],
    preparationSteps: ["Lägg lager i kastrull", "Koka och vänd upp", "Servera med yoghurt"],
    cookingTime: 90,
    origin: "Palestina",
    spiceLevel: "Mellan"
  }
];

// Ansluter till databasen, rensar gamla rätter och lägger in dessa
mongoose.connect(CONNECTION_URL)
  .then(async () => {
    console.log("Connected, seeding...");
    await Dish.deleteMany();
    await Dish.insertMany(dishes);
    console.log("Dishes seeded!");
    process.exit();
  })
  .catch(err => console.error("Seed error:", err));
