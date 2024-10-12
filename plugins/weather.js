const axios = require('axios'),
  config = require('../config'),
  { cmd, commands } = require('../command')
cmd(
  {
    pattern: 'weather',
    desc: '\uD83C\uDF24 Get weather information for a location',
    react: '\uD83C\uDF24',
    category: 'other',
    filename: __filename,
  },
  async (
    _0x3fd2f1,
    _0x48eb2e,
    _0x51068c,
    { from: _0x6fc6e, q: _0x52b5dd, reply: _0x272d27 }
  ) => {
    try {
      if (!_0x52b5dd) {
        return _0x272d27(
          '\u2757 Please provide a city name. Usage: .weather [city name]'
        )
      }
      const _0x489903 = '2d61a72574c11c4f36173b627f8cb177',
        _0x277f10 = _0x52b5dd,
        _0x6b1282 =
          'http://api.openweathermap.org/data/2.5/weather?q=' +
          _0x277f10 +
          '&appid=' +
          _0x489903 +
          '&units=metric',
        _0x20b85d = await axios.get(_0x6b1282),
        _0x472360 = _0x20b85d.data,
        _0x55f4f5 =
          '\n\uD83C\uDF0D *Weather Information for ' +
          _0x472360.name +
          ', ' +
          _0x472360.sys.country +
          '* \uD83C\uDF0D\n\n\uD83C\uDF21️ *Temperature*: ' +
          _0x472360.main.temp +
          '\xB0C\n\uD83C\uDF21️ *Feels Like*: ' +
          _0x472360.main.feels_like +
          '\xB0C\n\uD83C\uDF21️ *Min Temp*: ' +
          _0x472360.main.temp_min +
          '\xB0C\n\uD83C\uDF21️ *Max Temp*: ' +
          _0x472360.main.temp_max +
          '\xB0C\n\uD83D\uDCA7 *Humidity*: ' +
          _0x472360.main.humidity +
          '%\n\u2601️ *Weather*: ' +
          _0x472360.weather[0].main +
          '\n\uD83C\uDF2B️ *Description*: ' +
          _0x472360.weather[0].description +
          '\n\uD83D\uDCA8 *Wind Speed*: ' +
          _0x472360.wind.speed +
          ' m/s\n\uD83D\uDD3D *Pressure*: ' +
          _0x472360.main.pressure +
          ' hPa\n\nPowered by OpenWeatherMap \uD83C\uDF26️\n'
      return _0x272d27(_0x55f4f5)
    } catch (_0x33a726) {
      console.log(_0x33a726)
      if (_0x33a726.response && _0x33a726.response.status === 404) {
        return _0x272d27(
          '\uD83D\uDEAB City not found. Please check the spelling and try again.'
        )
      }
      return _0x272d27(
        '\u26A0️ An error occurred while fetching the weather information. Please try again later.'
      )
    }
  }
)
