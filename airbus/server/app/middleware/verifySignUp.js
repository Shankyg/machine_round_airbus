const db = require("../models");
const User = db.user;
const ROLES = ["user", "admin"];
checkDuplicateEmail = (req, res, next) => {


    // Email
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(user => {
      if (user) {
        res.status(400).send({
          message: "Failed! Email is already in use!"
        });
        return;
      }

      next();
    });
  
};

checkRolesExisted = (req, res, next) => {
  if (req.body.role) {
    
      if (!ROLES.includes(req.body.role)) {
        res.status(400).send({
          message: "Failed! Role does not exist = " + req.body.role
        });
        return;
      }
    
  }
  else{
    res.status(400).send({
      message: "Failed! Role does not exist = " + req.body.role
    });
    return;
  }
  
  next();
};

const verifySignUp = {
  checkDuplicateEmail: checkDuplicateEmail,
  checkRolesExisted: checkRolesExisted
};

module.exports = verifySignUp;