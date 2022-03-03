import fnRest from '../utils/fetch';


export default class TestService {

  async getTestUser() {
    const method = 'GET';
    const url = 'https://reqres.in/api/users?page=1';
    const data = {};

    const res = fnRest(method, url, data);
  }

}