const mongoose = require('mongoose');
const config = require('../config');
const EnvVar = require('./mongodbenv');

const defaultEnvVariables = [
    { key: 'ALIVE_IMG', value: 'https://i.ibb.co/tZzBS47/image.jpg' },
    { key: 'ALIVE_MSG', value: 'Oyage Cudu Nona Innawa patiyo!' },
    { key: 'PREFIX', value: '.' },
    { key: 'MODE', value: 'private' },
    { key: 'AUTO_REPLY', value: 'true' },
    { key: 'AUTO_STICKER', value: 'flase' },
    { key: 'AUTO_VOICE', value: 'true' },
];

// MongoDB connection function
const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB);
        console.log('🛜 MongoDB Connected ✅');

        // Check and create default environment variables
        for (const envVar of defaultEnvVariables) {
            const existingVar = await EnvVar.findOne({ key: envVar.key });

            if (!existingVar) {
                // Create new environment variable with default value
                await EnvVar.create(envVar);
                console.log(`➕ Created default env var: ${envVar.key}`);
            }
        }

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
