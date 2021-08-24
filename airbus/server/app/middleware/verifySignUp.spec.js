const verifySignUp = require("./verifySignUp")
const { getMockReq, getMockRes } = require('@jest-mock/express') 
jest.mock('../models/user.model.js', () => () => {
    const SequelizeMock = requre("sequelize-mock");
    const dbMock = new SequelizeMock();
    return dbMock.define('users',  {
      id: 2,
      email: 'test@test.com',
      name: 'good',
      role: 'user',
      password: "12344567",
      
    },{
        'instanceMethods': {
            findOne: function (data) { return data==this.get('email')?true:false; },
        },
    })
  });
describe("Check method \'checkDuplicateEmail\' ", () => {
    test('should 400 and return correct value', async () => {
      let req = getMockReq({
          body:{
            email: "test@test.com",
            password: "12345678",
            name: "test",
            role: "admin",
          }
      });
      const {res,next} = getMockRes({
          status:jest.fn()
      });
      //jest.spyOn(User, 'findOne').mockResolvedValueOnce(true)
      verifySignUp.checkDuplicateEmail(req, res, next);
  
      expect(res.status).toHaveBeenCalledWith(400);
    });
  
    test('should call next', async () =>{
        let req = getMockReq({
            body:{
              email: "stdhxbsdt@test.com",
              password: "12345678",
              name: "test",
              role: "admin",
            }
        });
       
        const {res,next} = getMockRes({
            status:jest.fn()
        });
        verifySignUp.checkRolesExisted(req, res, next);
    
        expect(next).toBeCalled();
      });
  });
  describe("Check method \'checkRolesExisted\' ", () => {
    test('should 400 and return correct value', async () => {
      let req = getMockReq({
          body:{
            email: "test@test.com",
            password: "12345678",
            name: "test",
            role: "test",
          }
      });
     
      const {res,next} = getMockRes({
          status:jest.fn()
      });
      verifySignUp.checkRolesExisted(req, res, next);
  
      expect(res.status).toHaveBeenCalledWith(400);
    });
  
    test('should call next', async () => {
        let req = getMockReq({
            body:{
              email: "test@test.com",
              password: "12345678",
              name: "test",
              role: "admin",
            }
        });
       
        const {res,next} = getMockRes({
            status:jest.fn()
        });
        verifySignUp.checkRolesExisted(req, res, next);
    
        expect(next).toBeCalled();
      });
  });