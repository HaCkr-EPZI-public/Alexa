const fetch = (...args) =>
    import('node-fetch').then(({ default: fetch }) =>
      fetch(...args)
    );

const APIs = {
    apkCombo: 'https://apkcombo.com',
    apkDl: 'https://apk-dl.com',
    apkSupport: 'https://apk.support',
    evozi: 'https://apps.evozi.com/apk-downloader',
    aptoide: 'http://ws75.aptoide.com/api/7',
    cafeBazaar: 'https://cafebazaar.ir',
};

const getProxyUrl = (url) =>
    url
      ? 'https://translate.google.com/translate?sl=en&tl=fr&hl=en&u=' +
        encodeURIComponent(url) +
        '&client=webapp'
      : '';

const api = (apiName, endpoint = '/', queryParams = {}) =>
    (apiName in APIs ? APIs[apiName] : apiName) +
    endpoint +
    (Object.keys(queryParams).length
      ? '?' + new URLSearchParams(queryParams).toString()
      : '');

module.exports = {
  APIs,
  getProxyUrl,
  api,
};
