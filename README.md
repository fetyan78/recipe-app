MongoDB CRUD – Recipe App
Detta är ett skolprojekt där jag har byggt en fullständig Node.js-applikation med MongoDB Atlas. Användaren kan visa, lägga till, uppdatera och ta bort exotiska maträtter via ett enkelt gränssnitt (HTML och JavaScript).

Tekniker
Node.js och Express

MongoDB Atlas

Mongoose

HTML och Fetch API

Git och GitHub

Kom igång
Klona projektet:
git clone https://github.com/fetyan78/recipe-app.git
cd recipe-app

Installera beroenden:
npm install

Skapa en .env-fil och lägg in följande:
PORT=5001
CONNECTION_URL=mongodb+srv://<user>:<password>@<cluster-url>/?retryWrites=true&w=majority

Starta servern:
node index.js

Skriv i webbläsaren:
http://localhost:5001

Reflektion:
Jag hade problem med att rätt HTML-fil visades i början. Det löste jag genom att ta bort en gammal index.html som låg fel, och placera den nya i rätt mapp (public).
Jag lärde mig också hur man kopplar frontend med en MongoDB-databas via Express och hur man hanterar rutter och APIanrop.