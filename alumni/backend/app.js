const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const userRoutes = require('./routes/user')
const authRoutes = require('./routes/auth')

//"type": "module",

mongoose.connect('mongodb://localhost:27017/alumni',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

//gestion du contrôle des requêtesf
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());

//définition de l'API
app.use('/enspy_alumni_api/auth', authRoutes);
app.use('/enspy_alumni_api/users', userRoutes);

module.exports = app;