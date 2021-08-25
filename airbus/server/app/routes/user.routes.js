const { authJwt } = require("../middleware/injex");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get(
    "/api/users",
    [authJwt.verifyToken], controller.user
  );
  app.post(
    "/api/update",
    [authJwt.verifyToken], controller.updateUser
  );
  app.post(
    "/api/delete",
    [authJwt.verifyToken], controller.deleteUser
  );
  app.get(
    "/test",
    (req,res)=>{
      res.send("health check")
    }
  );
};