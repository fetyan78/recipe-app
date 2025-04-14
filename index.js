// Laddar in miljövariabler från .env-filen
require('dotenv').config();

// Visar upp kopplingssträngen i terminalen så man ser att den laddas
console.log('Connecting to:', process.env.CONNECTION_URL);

// Importerar nödvändiga bibliotek
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// Importerar routes för hantering av rätter
const dishRoutes = require('./routes/dishes');

const app = express();

// Hämtar port och MongoDB-länk från .env-filen
const PORT = process.env.PORT;
const CONNECTION_URL = process.env.CONNECTION_URL;

// Gör så att servern kan läsa JSON-data från klienten (t.ex. från formulär)
app.use(express.json());

// Länkar alla API-anrop som börjar med /api/dishes till våra dish-routes
app.use('/api/dishes', dishRoutes);

// Ser till att HTML-filer och annan frontend kan hittas av servern
app.use(express.static(path.join(__dirname, 'public')));

// Kopplar upp sig mot MongoDB
mongoose.connect(CONNECTION_URL)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Startar själva webbservern
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
