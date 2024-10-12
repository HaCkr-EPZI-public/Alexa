const { cmd } = require('../command'),
  axios = require('axios')
cmd(
  {
    pattern: 'lyrics',
    desc: 'To fetch and send song lyrics.',
    react: '\uD83D\uDD0D',
    category: 'search',
    filename: __filename,
  },
  async (
    _0x142d9a,
    _0x405c57,
    _0x201a31,
    {
      from: _0x133032,
      quoted: _0x57ec9c,
      body: _0x577301,
      isCmd: _0x320b97,
      command: _0x520440,
      args: _0x2eb0d7,
      q: _0x569049,
      isGroup: _0x26c41d,
      sender: _0x4ac42f,
      senderNumber: _0x46a11f,
      botNumber2: _0x41f3e5,
      botNumber: _0x31b650,
      pushname: _0x2e77ac,
      isMe: _0x2ec8ff,
      isOwner: _0x14b863,
      groupMetadata: _0x1abd5c,
      groupName: _0x2314cc,
      participants: _0x550224,
      groupAdmins: _0x128e49,
      isBotAdmins: _0x5573a0,
      isAdmins: _0x4f299b,
      reply: _0x4ed3e3,
    }
  ) => {
    try {
      if (!_0x569049) {
        return _0x4ed3e3('Please provide the name of the song.')
      }
      const [_0x5a1dcb, ..._0x135b0d] = _0x569049.split(' - '),
        _0x160537 = _0x135b0d.join(' - ')
      if (!_0x5a1dcb || !_0x160537) {
        return _0x4ed3e3(
          'Please provide the song in the format: "artist - title"'
        )
      }
      const _0x4b24e7 =
          'https://api.lyrics.ovh/v1/' +
          encodeURIComponent(_0x5a1dcb) +
          '/' +
          encodeURIComponent(_0x160537),
        { data: _0x47d80c } = await axios.get(_0x4b24e7)
      if (!_0x47d80c || !_0x47d80c.lyrics) {
        return _0x4ed3e3('No lyrics found for this song.')
      }
      let _0x18c185 = _0x47d80c.lyrics.trim()
      _0x18c185.length > 4096 &&
        (_0x18c185 = _0x18c185.substring(0, 4093) + '...')
      _0x4ed3e3(
        '\n            *Lyrics for "' +
          _0x160537 +
          '" by ' +
          _0x5a1dcb +
          ':*\n            ' +
          _0x18c185 +
          '\n            \n            >CUDU NONA LYRICS SEARCH'
      )
    } catch (_0x77e4c2) {
      console.error(_0x77e4c2)
      _0x4ed3e3('Failed to fetch lyrics. Please try again later.')
    }
  }
)
