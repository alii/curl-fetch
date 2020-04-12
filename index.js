const request = require('request-curl');

class CurlFetch {
  constructor(config = {}) {
    this.defaultConfig = config;
    this._getConfig = this._getConfig.bind(this);
    this.fetch = this.fetch.bind(this);
  }

  _getConfig(_options, url) {
    const options = { ..._options, url };
    return { ...this.defaultConfig, ...options };
  }

  /**
   * Fetches a resource
   * @param url The URL of the resource
   * @param _options Options to pass to request-curl
   * @returns {Promise}
   */
  async fetch(url, _options) {
    const options = this._getConfig(_options, url);
    const result = await request(options);
    const { body, headers, statusCode } = result;

    return {
      headers,
      status: statusCode,
      ok: 200 <= statusCode < 300,
      result,
      async text() {
        return body;
      },
      async json() {
        return JSON.parse(body);
      },
    };
  }
}

module.exports = CurlFetch;
