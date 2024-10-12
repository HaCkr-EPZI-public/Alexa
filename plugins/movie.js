const axios = require('axios'),
  { cmd } = require('../command'),
  { readEnv } = require('../lib/database')
cmd(
  {
    pattern: 'movie',
    desc: 'Fetch detailed information about a movie.',
    category: 'other',
    react: '\uD83C\uDFAC',
    filename: __filename,
  },
  async (
    _0x1f3328,
    _0x4cb22e,
    _0x9f023e,
    {
      from: _0x594d03,
      quoted: _0x34b1e1,
      body: _0x32e906,
      isCmd: _0x3ee6b1,
      command: _0x799af0,
      args: _0x3c7272,
      q: _0xf126a8,
      isGroup: _0x2d7f80,
      sender: _0x18fb44,
      senderNumber: _0x5d1a93,
      botNumber2: _0x34924b,
      botNumber: _0x44b82e,
      pushname: _0x10e43e,
      isMe: _0x4cc093,
      isOwner: _0x50bdb7,
      groupMetadata: _0x295fa4,
      groupName: _0x4789bd,
      participants: _0x345e8a,
      groupAdmins: _0x39a0b5,
      isBotAdmins: _0x3e3453,
      isAdmins: _0x33d994,
      reply: _0x4d8643,
    }
  ) => {
    try {
      const _0x4c0005 = await readEnv(),
        _0x2aaf98 = _0x3c7272.join(' ')
      if (!_0x2aaf98) {
        return _0x4d8643('\uD83D\uDCFD️ Please provide the name of the movie.')
      }
      const _0x50119f =
          'http://www.omdbapi.com/?t=' +
          encodeURIComponent(_0x2aaf98) +
          '&apikey=' +
          _0x4c0005.OMDB_API_KEY,
        _0x52a3e4 = await axios.get(_0x50119f),
        _0x228c6e = _0x52a3e4.data
      if (_0x228c6e.Response === 'False') {
        return _0x4d8643('\uD83D\uDEAB Movie not found.')
      }
      const _0x165526 =
          '\n\uD83C\uDFAC *Movie Information* \uD83C\uDFAC\n\n\uD83C\uDFA5 *Title:* ' +
          _0x228c6e.Title +
          '\n\uD83D\uDCC5 *Year:* ' +
          _0x228c6e.Year +
          '\n\uD83C\uDF1F *Rated:* ' +
          _0x228c6e.Rated +
          '\n\uD83D\uDCC6 *Released:* ' +
          _0x228c6e.Released +
          '\n\u23F3 *Runtime:* ' +
          _0x228c6e.Runtime +
          '\n\uD83C\uDFAD *Genre:* ' +
          _0x228c6e.Genre +
          '\n\uD83C\uDFAC *Director:* ' +
          _0x228c6e.Director +
          '\n\u270D️ *Writer:* ' +
          _0x228c6e.Writer +
          '\n\uD83C\uDFAD *Actors:* ' +
          _0x228c6e.Actors +
          '\n\uD83D\uDCDD *Plot:* ' +
          _0x228c6e.Plot +
          '\n\uD83C\uDF0D *Language:* ' +
          _0x228c6e.Language +
          '\n\uD83C\uDDFA\uD83C\uDDF8 *Country:* ' +
          _0x228c6e.Country +
          '\n\uD83C\uDFC6 *Awards:* ' +
          _0x228c6e.Awards +
          '\n\u2B50 *IMDB Rating:* ' +
          _0x228c6e.imdbRating +
          '\n\uD83D\uDDF3️ *IMDB Votes:* ' +
          _0x228c6e.imdbVotes +
          '\n',
        _0x2bbd89 =
          _0x228c6e.Poster && _0x228c6e.Poster !== 'N/A'
            ? _0x228c6e.Poster
            : _0x4c0005.ALIVE_IMG
      await _0x1f3328.sendMessage(
        _0x594d03,
        {
          image: { url: _0x2bbd89 },
          caption: _0x165526 + '\n> Asᴍᴏᴅᴇᴜs Eᴘᴢɪ',
        },
        { quoted: _0x4cb22e }
      )
    } catch (_0x26e931) {
      console.log(_0x26e931)
      _0x4d8643('\u274C Error: ' + _0x26e931.message)
    }
  }
)
