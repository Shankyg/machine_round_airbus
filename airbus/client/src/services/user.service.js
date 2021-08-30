import axios from 'axios';
import authHeader from './auth-header';

const API_URL = process.env.NODE_ENV =="production" ? 'http://airbususermanagement-env.eba-uamcqyja.us-east-2.elasticbeanstalk.com/api/' :'http://localhost:8080/api/';

class UserService {
  
  getUserBoard() {
    return axios.get(API_URL + 'users', { headers: authHeader() });
  }
  deleteUser(data) {
    return axios.post(API_URL + 'delete',{id:data}, { headers: authHeader()});
  }
}

export default new UserService();