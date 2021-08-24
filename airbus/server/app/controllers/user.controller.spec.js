const controller = require('./user.controller');
const { getMockReq, getMockRes } = require('@jest-mock/express')
const db = require("../models");
const User = db.user;

const userdata = {
          id: 2,
          email: 'xyz@abc.com',
          name: 'good',
          role: 'user',
          password: "12344567",
          
        }

describe("Check method \'controller.user\' ", () => {
    
    test('should 200 and return correct value', async () => {
    const spy = jest.spyOn(User, 'findByPk').mockResolvedValueOnce(userdata);
      let req = getMockReq();
      req.userId = "2";
      const {res,next} = getMockRes({
          status:jest.fn()
      });
      await controller.user(req, res);
      expect(spy).toHaveBeenCalledWith(req.userId);
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });