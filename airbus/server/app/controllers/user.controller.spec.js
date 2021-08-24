const controller = require('./user.controller');
const { getMockReq, getMockRes } = require('@jest-mock/express')

const userdata = {
          id: 2,
          email: 'xyz@abc.com',
          name: 'good',
          role: 'user',
          password: "12344567",
          
        }
jest.mock('../models', () => () => {
    const SequelizeMock = require("sequelize-mock");
    const dbMock = new SequelizeMock();
    return dbMock.define('users',  {
      id: 2,
      email: 'xyz@abc.com',
      name: 'good',
      role: 'user',
      password: "12344567",
      
    },{
        'instanceMethods': {
            findByPk: function () { return {role:"user"}; },
        },
    })
  });

describe("Check method \'controller.user\' ", () => {
    
    test('should 200 and return correct value', async () => {
    jest.spyOn(User.prototype, 'findByPk').mockResolvedValueOnce(userdata);
      let req = getMockReq();
      req.userId = "2";
      const {res,next} = getMockRes({
          status:jest.fn()
      });
      controller.user(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });