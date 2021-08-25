import axios from 'axios';

const API_URL = process.env.NODE_ENV =="production" ? 'http://airbususermanagement-env.eba-uamcqyja.us-east-2.elasticbeanstalk.com/' :'http://localhost:8080/api/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'auth/signin', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'auth/signup', {
      email: user.email,
      password: user.password,
      name: user.name,
      role: user.role

    });
  }
}

export default new AuthService();