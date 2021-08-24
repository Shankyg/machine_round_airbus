const authJwt = require("./authJwt")
const { getMockReq, getMockRes } = require('@jest-mock/express') 
const jwt = require("jsonwebtoken");

describe("Check method \'verifyToken\' ", () => {
    test('should 403 and return correct value', async () => {
      let req = getMockReq({
          headers:{
            "x-access-token": 0
          }
      });
      const {res,next} = getMockRes({
          status:jest.fn()
      });
      authJwt.verifyToken(req, res, next);
  
      expect(res.status).toHaveBeenCalledWith(403);
    });
  
    // test('should call jwt.verify', async () => {
    //     let req = getMockReq({
    //         headers:{
    //           "x-access-token": 1
    //         }
    //     });
    //     const {res,next} = getMockRes({
    //         status:jest.fn()
    //     });
    // authJwt.verifyToken(req, res, next);
    // expect(jwt.verify).toBeCalled();
    // });
  });