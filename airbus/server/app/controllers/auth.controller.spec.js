const {signup,signin} = require('./auth.controller');
const { getMockReq, getMockRes } = require('@jest-mock/express') 

// jest.mock("../models",()=>({
//     getUserBoard(){
//         return {
//             then(fnc){
//                 return fnc(
//                     {data:[{
//                     createdAt: "2021-08-20T12:31:53.410Z",
//                     email: "test@test.com",
//                     id: 1,
//                     name: "test",
//                     role: "admin",
//                     }]}
//                     )
//             }
//         };
//     }
// }))

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
      req.params.id = 1;
      const res = getMockRes({
          status:jest.fn()
      });
      signup(req, res);
  
      expect(res.status).toHaveBeenCalledWith(200);
    //   expect(res.send.mock.calls.length).toBe(1);
    //   expect(res.send).toHaveBeenCalledWith('Hello i am todo controller');
    });
  
    // test('should 500 and return correct value', async () => {
    //   let req = getMockReq();
    //   req.params.id = null;
    //   const res = getMockRes();
  
    //   await signup(req, res);
  
    //   expect(res.status).toHaveBeenCalledWith(404);
    //   expect(res.json).toHaveBeenCalledWith({ message: 'Not Found' });
    // });
  });
//   describe("Check method \'signin\' ", () => {
//     test('should 200 and return correct value', async () => {
//       let req = getMockReq();
//       req.params.id = 1;
//       const res = getMockRes();
  
//       await signin(req, res);
  
//       expect(res.send).toHaveBeenCalledTimes(1)
//       expect(res.send.mock.calls.length).toBe(1);
//       expect(res.send).toHaveBeenCalledWith('Hello i am todo controller');
//     });
  
//     test('should 404 and return correct value', async () => {
//       let req = getMockReq();
//       req.params.id = null;
//       const res = getMockRes();
  
//       await signin(req, res);
  
//       expect(res.status).toHaveBeenCalledWith(404);
//       expect(res.json).toHaveBeenCalledWith({ message: 'Not Found' });
//     });
//   });