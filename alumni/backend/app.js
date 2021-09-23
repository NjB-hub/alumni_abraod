const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const userRoutes = require('./routes/user')

mongoose.connect('mongodb://localhost:27017/alumni',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

//gestion de l'authentification des requêtes

app.use(bodyParser.json());

//définition de l'API
app.use('/enspy_alumni_api/auth', userRoutes);

module.exports = app;