const { readEnv } = require('../lib/database'),
  { igdl } = require('ruhend-scraper'),
  { cmd, commands } = require('../command')
cmd(
  {
    pattern: 'ig',
    desc: 'To get the bot informations.',
    react: '\uD83C\uDFA5',
    category: 'download',
    filename: __filename,
  },
  async (
    _0x566110,
    _0x386916,
    _0xd62150,
    {
      from: _0x4900ec,
      quoted: _0x2348c6,
      body: _0x396893,
      isCmd: _0xf7c8ed,
      command: _0x3e9d6b,
      args: _0x2b965b,
      q: _0xa573be,
      isGroup: _0x17e3e3,
      sender: _0x4308e6,
      senderNumber: _0x18a27f,
      botNumber2: _0x4a30b0,
      botNumber: _0xb53aab,
      pushname: _0xeafd72,
      isMe: _0x552a93,
      isOwner: _0x2b7d22,
      groupMetadata: _0x3a6a63,
      groupName: _0x5b992d,
      participants: _0x29f105,
      groupAdmins: _0x495e5f,
      isBotAdmins: _0x3b7d10,
      isAdmins: _0x33175e,
      reply: _0x41ad5a,
    }
  ) => {
    try {
      const _0x2e2c7a = await readEnv()
      if (!_0xa573be) {
        return _0xd62150.reply('Please Give Me a vaild Link...')
      }
      _0xd62150.react('\u2B07️')
      let _0x233808 = await igdl(_0xa573be),
        _0x267d00 = await _0x233808.data
      for (let _0x5dc566 = 0; _0x5dc566 < 20; _0x5dc566++) {
        let _0x3a21b7 = _0x267d00[_0x5dc566],
          _0x58ce84 = _0x3a21b7.url
        _0xd62150.react('\u2B06️')
        await _0x566110.sendMessage(
          _0x4900ec,
          {
            video: { url: _0x58ce84 },
            mimetype: 'video/mp4',
          },
          { quoted: _0x386916 }
        )
        _0xd62150.react('\u2705')
      }
    } catch (_0x412260) {
      console.log(_0x412260)
    }
  }
)
