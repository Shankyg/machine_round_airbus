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

exports.updateUser = (req, res)=>{

  User.findByPk(req.userId)
    .then(user => {
      if (user.role === "admin") {
        User.update({
          email: req.body.data.email,
          name: req.body.data.name,
          role: req.body.data.role
        },{
          where:{
            id :req.body.data.id
          }
        })
        .then(()=> {
          res.status(200).send("User Updated.");
        });
      }
      else{

        res.status(403).send("Error: unauthorised access.");
      }
    });
};

exports.deleteUser = (req, res)=>{

  User.findByPk(req.userId)
    .then(user => {
      if (user.role === "admin") {
        User.destroy({
          where:{
            id: req.body.id
          }
        })
        .then(() => {
          res.status(200).send("User deleted.");
        });
      }
      else{

        res.status(403).send("Error: unauthorised access.");
      }
    });

};

