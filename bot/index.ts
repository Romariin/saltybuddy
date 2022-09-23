import * as dotenv from 'dotenv';
dotenv.config()
import * as color from 'colorette';
import Twitch from './classes/twitch';
import tmi from 'tmi.js';



console.group(color.bgGreen('            🤖 SaltyScrapper            '));
// const client = new tmi.client({
//     identity: {
//         username: 'romarinbotdev',
//         password: process.env.TWITCH_OAUTH
//     },
//     connection: {
//         secure: true,
//         reconnect: true
//     },
//     channels: ['saltybet']
// });
// client.connect();
// client.on('message', (channel, tags, message, self) => {
//     console.log(('💬'), color.green(tags['display-name']), color.blue(message));
// });

const twitch = new Twitch

console.groupEnd();

Twitch.connectTwitch('romarinbotdev', process.env.TWITCH_OAUTH).then((client:any) => {
    client.on('message', (channel:any, tags:any, message:any) => {
        if (tags['user-id'] === '55853880') {
        console.log(color.greenBright(tags['display-name']), ('💬'), color.blue(message));
        }
    });
});
