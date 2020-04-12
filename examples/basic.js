const Fetch = require('../index'); // Instead, replace with `require('curl-fetch');
const { fetch } = new Fetch();

fetch('https://httpbin.org/get', {
  headers: {
    'Accept':
      'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8,la;q=0.7',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'none',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.92 Safari/537.36',
  },
})
  .then(res => res.json())
  .then(console.log)
  .catch(console.warn);
