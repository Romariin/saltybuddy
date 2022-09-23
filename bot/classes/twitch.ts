import tmi from 'tmi.js';
import * as color from 'colorette';

class Twitch {
    static async connectTwitch(channel:any): Promise<any> {
        console.log(color.bgBlue(' [Auth] '), color.blue(`🌎 Starting auth process..` ));
        const client = new tmi.client({
            connection: {
                secure: true,
                reconnect: true
            },
            channels: [channel]
        });
        client.connect().then(() => {
            console.log(color.bgGreenBright(' [Auth] '), color.green(`✅ Authenticated` ));
        }).catch((err:any) => {
            console.log(color.bgRed(' [Auth] '), color.red(`🌎 Authentication failed` ));
            console.log(err);
        });
        return client;
    }

    static async parseMatch(str:any): Promise<any> {
        switch(str) {
            case (str.match(/Bets are OPEN for (.*) vs (.*)!/) || {}).input:
                const matchData = str.match(/Bets are OPEN for (.*) vs (.*)!/);
                console.log(color.bgYellowBright(' [Game] '), color.yellow(`🔥 Match\n└`), color.redBright(matchData[1]), color.white('vs'), color.blueBright(matchData[2]));
                break;
            case (str.match(/Bets are (.*)./) || {}).input:
                const matchState = str.match(/Bets are (.*).!/);
                console.log(color.bgYellowBright(' [Game] '), color.yellow(`🔥 Match\n└`), color.redBright(`State is now: ${color.bold(matchState)}`));
                break;
            case (str.match(/Payouts to Team (.*)./) || {}).input:
                console.log('Payouts', str);
                break;
        }
    }
}

export default Twitch;