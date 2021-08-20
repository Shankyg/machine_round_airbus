const db = require("../models");

const User = db.user;

parser = ["id","name","email","role","createdAt"];

exports.user = (req, res) => {
  User.findByPk(req.userId)
    .then(user => {
      if (user.role === "admin") {
        User.findAll()
        .then(users => {
          res.status(200).send(JSON.stringify(users, parser, 2));
        });
      }
      else{

        res.status(200).send(JSON.stringify([user], parser, 2));
      }

      
    });
};

