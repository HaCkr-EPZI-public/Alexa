const { readEnv } = require('../lib/database'),
  { cmd, commands } = require('../command'),
  os = require('os'),
  { runtime } = require('../lib/functions')

cmd(
  {
    pattern: 'menu',
    desc: 'To get the menu.',
    react: '😊',
    category: 'main',
    filename: __filename,
  },
  async (
    message,
    chat,
    args,
    {
      from,
      quoted,
      body,
      isCmd,
      command,
      args: commandArgs,
      q,
      isGroup,
      sender,
      senderNumber,
      botNumber2,
      botNumber,
      pushname,
      isMe,
      isOwner,
      groupMetadata,
      groupName,
      participants,
      groupAdmins,
      isBotAdmins,
      isAdmins,
      reply,
    }
  ) => {
    try {
      const envConfig = await readEnv();
      const commandCategories = {
        main: '',
        download: '',
        fun: '',
        group: '',
        owner: '',
        search: '',
        other: '',
      };

      for (let i = 0; i < commands.length; i++) {
        if (commands[i].pattern && !commands[i].dontAddCommandList) {
          commandCategories[commands[i].category] +=
            '⚠️' + envConfig.PREFIX + commands[i].pattern + '\n';
        }
      }

      let menuMessage = `
🌟👑 Welcome to _Asmodeus AI_ 👑🌟

      👋 Hello, ${pushname}! 

✨ Here's the menu! ✨ 

🕒 Bot Uptime: ${runtime(process.uptime())}  
👤 Bot Number: ${envConfig.BOT_NUMBER}  
💻 Memory Usage: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(
        require('os').totalmem() / 1024 / 1024
      )}MB  

📥 Download Commands: 
${commandCategories.download}

🎉 Fun Commands: 
${commandCategories.fun}

👥 Group Commands: 
${commandCategories.group}

🔒 Owner Commands: 
${commandCategories.owner}

🔍 Search Commands: 
${commandCategories.search}

⚙️ Other Commands: 
${commandCategories.other}

© Epzi_Official - MD 
💻 GitHub: github.com/HaCkr-EPZI-public/CuduNona
`;

      return await message.sendMessage(
        from,
        {
          image: { url: envConfig.ALIVE_IMG },
          caption: menuMessage,
        },
        { quoted: chat }
      );
    } catch (error) {
      console.log(error);
      reply('' + error);
    }
  }
);
