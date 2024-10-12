const config = require('../config');
const { cmd, commands } = require('../command');
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  fetchJson,
} = require('../lib/functions');
const apkdl = require('../plugins/apkdl');

let watermark = `© 👨‍💻 CUDU NONA BY EPZI 👨‍💻 v${require('../package.json').version} (Test)
Simple WABot made by Epzi ッ`;

const NOT_FOUND = "🚩 *I couldn't find anything :(*";
const URL_NEED = '🚩 *It downloads apps from Play Store.*';
const IMG_MSG = '🚩 *Please write a few words*';

if (config.COMMAND_TYPE === 'button') {
  const happymodCommand = {
    pattern: 'happymod',
    react: '📃',
    desc: 'Download apk in happymod',
    category: 'download',
    use: '.happymod',
    filename: __filename,
  };

  cmd(happymodCommand, async (bot, message, chatData, { from, q: query, pushname, reply }) => {
    try {
      const caliphApi = require('caliph-api');
      const searchResults = await caliphApi.search.happymod(query);

      let headerMessage = `> ✅⚡───────────────────────⚡✅ \n🎲 *Happymod Search Engine* 🎲\n⚡ *CUDU NONA H MODS SEARCH ENGINE* ⚡\n✅⚡───────────────────────⚡✅`;

      const rows = [];
      for (let result of searchResults.result) {
        rows.push({
          header: result + 1,
          title: result.title,
          description: `📩 *Title - ${result.title}* \n🔗 _Url : ${result.link}_`,
          id: `.dapk ${result.link} ${query}`,
        });
      }

      const buttonOptions = {
        display_text: config.BTN,
        url: config.BTNURL,
        merchant_url: config.BTNURL,
      };

      let buttonArray = [
        {
          name: 'cta_url',
          buttonParamsJson: JSON.stringify(buttonOptions),
        },
        {
          name: 'single_select',
          buttonParamsJson: JSON.stringify({
            title: 'Select news types',
            sections: [
              {
                title: 'Please select a category',
                highlight_label: 'VAJIRA-MD',
                rows: rows,
              },
            ],
          }),
        },
      ];

      const buttonMessage = {
        image: config.LOGO,
        header: '',
        footer: config.FOOTER,
        body: headerMessage,
      };

      return await bot.sendButtonMessage(from, buttonArray, chatData, buttonMessage);
    } catch (error) {
      reply('*Error !!*');
      console.log(error);
    }
  });

  const fmModsCommand = {
    pattern: 'fmmods',
    react: '📃',
    desc: 'get applications',
    category: 'download',
    use: '.fmmods',
    filename: __filename,
  };

  cmd(fmModsCommand, async (bot, message, chatData, { from, q: query, pushname, reply }) => {
    try {
      let fmModsData = (await fetchJson('https://vajira-api-7967fdc132a8.herokuapp.com/downloader/fmmods')).data;

      let headerMessage = `> 📥 EPZI APKDL 📥\n\n\t APPLICATION DOWNLOADER 📥`;

      const rows = [
        {
          header: '',
          title: 'Beta Whatsapp',
          description: 'Download Beta Whatsapp',
          id: `.dmod ${fmModsData.com_whatsapp.link}+${fmModsData.com_whatsapp.name}`,
        },
        {
          header: '',
          title: 'Fm Whatsapp',
          description: 'Download Fm Whatsapp',
          id: `.dmod ${fmModsData.com_fmwhatsapp.link}+${fmModsData.com_fmwhatsapp.name}`,
        },
        {
          header: '',
          title: 'Gb Whatsapp',
          description: 'Download Gb Whatsapp',
          id: `.dmod ${fmModsData.com_gbwhatsapp.link}+${fmModsData.com_gbwhatsapp.name}`,
        },
        {
          header: '',
          title: 'Yo Whatsapp',
          description: 'Download Yo Whatsapp',
          id: `.dmod ${fmModsData.com_yowhatsapp.link}+${fmModsData.com_yowhatsapp.name}`,
        },
      ];

      const buttonOptions = {
        display_text: config.BTN,
        url: config.BTNURL,
        merchant_url: config.BTNURL,
      };

      let buttonArray = [
        {
          name: 'cta_url',
          buttonParamsJson: JSON.stringify(buttonOptions),
        },
        {
          name: 'single_select',
          buttonParamsJson: JSON.stringify({
            title: 'Select news types',
            sections: [
              {
                title: 'Please select a category',
                highlight_label: 'VAJIRA-MD',
                rows: rows,
              },
            ],
          }),
        },
      ];

      const buttonMessage = {
        image: config.LOGO,
        header: '',
        footer: config.FOOTER,
        body: headerMessage,
      };

      return await bot.sendButtonMessage(from, buttonArray, chatData, buttonMessage);
    } catch (error) {
      reply('*Error !!*');
      console.log(error);
    }
  });
}
cmd(
  commandOptions,
  async (
    message,
    {
      from,
      quotedMessage,
      messageBody,
      isCommand,
      command,
      args,
      query,
      isGroup,
      sender,
      senderNumber,
      botNumber,
      botNumber2,
      pushName,
      isMe,
      isOwner,
      groupMetadata,
      groupName,
      participants,
      groupAdmins,
      isBotAdmin,
      isAdmin,
      reply,
    }
  ) => {
    try {
      const reactionOptions = {
        text: '📥',
        key: quotedMessage.key,
      };
      const reactionMessage = { react: reactionOptions };
      await message.sendMessage(from, reactionMessage);

      let [url, fileName] = query.split('+');
      const documentOptions = { url: url };
      const sendOptions = { quoted: quotedMessage };

      await message.sendMessage(
        from,
        {
          document: documentOptions,
          fileName: fileName + '.apk',
          mimetype: 'application/vnd.android.package-archive',
        },
        sendOptions
      );

      const successReaction = {
        text: '✔️',
        key: quotedMessage.key,
      };
      const successMessage = { react: successReaction };
      await message.sendMessage(from, successMessage);
    } catch (error) {
      reply('*ERROR !!*');
      console.error(error);
    }
  }
);

const apkCommand = {
  pattern: 'apk2',
  react: '📦',
  desc: 'Download applications',
  category: 'download',
  use: '.apk2 whatsapp',
  filename: __filename,
};

cmd(
  apkCommand,
  async (
    message,
    quotedMessage,
    args,
    { from, query, pushName, reply }
  ) => {
    try {
      const apkResults = await apkdl.search(query);
      let apkListMessage =
        '> 📥 CUDU NONA APKDL 📥\n\n\t APPLICATION DOWNLOADER 📥';
      const buttons = [];

      for (let i = 0; i < apkResults.length; i++) {
        buttons.push({
          header: i + 1,
          title: apkResults[i].name,
          description: '',
          id: '.dapk ' + apkResults[i].id,
        });
      }

      const buttonConfig = {
        display_text: config.BTN,
        url: config.BTNURL,
        merchant_url: config.BTNURL,
      };

      const buttonParams = [
        {
          name: 'cta_url',
          buttonParamsJson: JSON.stringify(buttonConfig),
        },
        {
          name: 'single_select',
          buttonParamsJson: JSON.stringify({
            title: 'Select a category',
            sections: [
              {
                title: 'Please select a category',
                highlight_label: 'EPZI-MD',
                rows: buttons,
              },
            ],
          }),
        },
      ];

      const messageOptions = {
        image: config.LOGO,
        header: '',
        footer: config.FOOTER,
        body: apkListMessage,
      };

      await message.sendButtonMessage(from, buttonParams, args, messageOptions);
    } catch (error) {
      reply('*Error !!*');
      console.error(error);
    }
  }
);

const simpleApkCommand = {
  pattern: 'apk',
  react: '📦',
  desc: 'APK download.',
  category: 'download',
  use: '.apk whatsapp',
  filename: __filename,
};

cmd(
  simpleApkCommand,
  async (
    message,
    quotedMessage,
    args,
    { from, query, pushName, reply }
  ) => {
    try {
      if (!query) {
        return await message.sendMessage(from, { text: '*Need apk name...*' }, { quoted: quotedMessage });
      }

      const apkDownload = await apkdl.download(query);
      let apkInfoMessage =
        '[👨‍💻 CUDU NONA 👨‍💻]\n\n*APK-DOWNLOADER*\n\n *📖 App Name: ' +
        apkDownload.name +
        '*\n *📊 App Size: ' +
        apkDownload.size +
        '*\n ─────────────────────────';

      const buttonOptions = [
        {
          name: 'cta_url',
          buttonParamsJson: JSON.stringify({
            display_text: 'See in Playstore',
            url: query,
            merchant_url: query,
          }),
        },
        {
          name: 'quick_reply',
          buttonParamsJson: JSON.stringify({
            display_text: 'Download APK 📥',
            id: '.dapk ' + query,
          }),
        },
        {
          name: 'quick_reply',
          buttonParamsJson: JSON.stringify({
            display_text: 'Info of APK 📊',
            id: '.apkinfo ' + query,
          }),
        },
      ];

      const messageDetails = {
        image: config.LOGO,
        header: '',
        footer: '',
        body: apkInfoMessage,
      };

      await message.sendButtonMessage(from, buttonOptions, args, messageDetails);
    } catch (error) {
      reply('*Error !!*');
      console.error(error);
    }
  }
);

// More commands for 'dapk' and 'apkinfo' can be structured similarly.
