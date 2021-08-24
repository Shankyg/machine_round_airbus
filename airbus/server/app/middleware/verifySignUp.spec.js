const verifySignUp = require("./verifySignUp")
const { getMockReq, getMockRes } = require('@jest-mock/express') 
const db = require("../models");
const User = db.user;

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
      const spy = jest.spyOn(User, 'findOne').mockResolvedValueOnce(true)
      await verifySignUp.checkDuplicateEmail(req, res, next)
    expect(res.status).toHaveBeenCalledWith(400);
      
  
      expect(spy).toBeCalled();
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