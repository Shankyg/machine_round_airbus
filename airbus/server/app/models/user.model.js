module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      }
    });
  
    return User;
  };