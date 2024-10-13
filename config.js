const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "7d8FmS7I#Lnt4Lz46fVugIM78Yu382EzeZ6dep3l5H4ZQ3yof3Ko",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
MODE: process.env.MODE || "private",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "true",
MONGODB: process.env.MONGODB || "url",
OMDB_API_KEY: process.env.OMDB_API_KEY || "a8f3fe20",    
};
