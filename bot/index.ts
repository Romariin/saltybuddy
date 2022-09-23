import * as dotenv from 'dotenv';
dotenv.config()
import * as color from 'colorette';
import Twitch from './classes/twitch';



console.group(color.bgGreen('            🤖 SaltyScrapper            '));
console.groupEnd();

Twitch.connectTwitch(process.env.TWITCH_CHANNEL).then((client: any) => {
    client.on('message', (channel: any, tags: any, message: any) => {
        if (tags['user-id'] === process.env.WAIFU4U_ID) {
            Twitch.parseMatch(message);
        }
    });
});
