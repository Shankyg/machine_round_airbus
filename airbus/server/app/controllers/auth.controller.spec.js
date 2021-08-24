const {signup,signin} = require('./auth.controller');
const { getMockReq, getMockRes } = require('@jest-mock/express') 
const db = require("../models");
const User = db.user;


describe("Check method \'signup\' ", () => {
    test('should 200 and return correct value', async () => {
      let req = getMockReq({
          body:{
            email: "test@test.com",
            password: "12345678",
            name: "test",
            role: "admin",
          }
      });
      const spy = jest.spyOn(User, 'create').mockResolvedValueOnce();
      const {res,next} = getMockRes({
          status:jest.fn()
      });
     await signup(req, res);
      expect(spy).toBeCalled();
      expect(res.status).toHaveBeenCalledWith(200);
      User.destroy({
        where:{
            email: "test@test.com"
        }
      })
    });
  });

  describe("Check method \'signin\' ", () => {
    test('should 404 and return correct value', async () => {
        let req = getMockReq({
            body:{
              email: "test@test.com",
              password: "12345678",
              name: "test",
              role: "admin",
            }
        });
        const spy = jest.spyOn(User, 'findOne').mockResolvedValueOnce(false);
        const {res,next} = getMockRes({
            status:jest.fn()
        });
      await signin(req, res);
  
      expect(res.status).toHaveBeenCalledWith(404)
      expect(spy).toBeCalled();
    });
  });