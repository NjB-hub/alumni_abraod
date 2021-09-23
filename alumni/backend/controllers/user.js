const User = require('../models/User')

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//fonction pour créer un nouvel utilisateur
exports.signup = (req, res, next) => {
bcrypt.hash(req.body.password, 10)
    .then(hash => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hash
    });
    user.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

//fonction pour vérifier la connexion d'un utilisateur
exports.login = (req, res, next) => {
  User.findOne({email: req.body.email})
    .then(user => {
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign(
              { userId: user._id },
              'RANDOM_TOKEN_SECRET_FOR_ENSPY_ALUMNI_ABROAD_APPLICATION',
              { expiresIn: '24h' }
            )
          });
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

//fonction pour récupérer un utilisateur ayant son id
exports.getOneUser = (req, res, next) => {
  User.findOne({
    _id: req.params.id
  }).then(
    (user) => {
      res.status(200).json(user);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

//fonction pour modifier un utilisateur connaissant son id
exports.modifyUser = (req, res, next) => {
  User.updateOne({
    _id: req.params.id
  },{
    _id: req.params.id,
    username: req.body.username,
    email: req.body.email
  })
  .then(
    () => res.status(200).json({message: "objet modifié!"})
  )
  .catch(
    (error) => {
      res.status(400).json({
        error
      });
    }
  )
};



//fonction pour récupérer la liste de tous les utilisateurs
exports.getAllUser = (req, res, next) => {
  User.find({}).then(
    (users) => {
      res.status(200).json(users);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};