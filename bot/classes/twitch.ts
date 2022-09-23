import tmi from 'tmi.js';
import * as color from 'colorette';

class Twitch {
    static async connectTwitch(username:string, password:any): Promise<any> {
        console.log(color.bgBlue(' [Auth] '), color.blue(`🌎 Starting auth..` ));
        const client = new tmi.client({
            identity: {
                username: username,
                password: password
            },
            connection: {
                secure: true,
                reconnect: true
            },
            channels: ['saltybet']
        });
        client.connect().then(() => {
            console.log(color.bgGreenBright(' [Auth] '), color.green(`✅ Authenticated ${color.bold(username)}` ));
        }).catch((err:any) => {
            console.log(color.bgRed(' [Auth] '), color.red(`🌎 Authentication failed ${color.bold(username)}` ));
            console.log(err);
        });
        return client;
    }
}

export default Twitch;