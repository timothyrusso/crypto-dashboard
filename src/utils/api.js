import { apiConfig } from './constants'

class Api {
  constructor(config) {
    this._baseUrl = config.baseUrl;
    this._header = config.header;
  }

  _checkResponse(res) {
    if (res.ok) {
      console.log(
        `URL: ${res.url}
Status: ${res.statusText}
Status code: ${res.status}`);
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  }

  getPrice() {
    return fetch(this._baseUrl, {
      headers: this._header
    })
      .then(this._checkResponse)
  }
}

const api = new Api(apiConfig)

export default api;
