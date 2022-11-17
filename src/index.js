import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.DirectMessages,
  ],
});

client.login(process.env.DISCORD_TOKEN);

let weightChange = 0;
let weightGainStreak = 0;
let weightLossStreak = 0;

const weightHandler = (message) => {
  weightChange += parseFloat(message.content);

  if (message.content === 'reset') {
    weightChange = 0;
    message.channel.send('Reset weight change to 0');
    return;
  }

  if (weightChange < 0) {
    weightGainStreak = 0;
    weightLossStreak++;

    message.author.send('gamed neek ybro');

    message.channel.send(
      `3ash ybro\nWeight Lost: ${message.content}\nWeight Loss Streak: ${weightLossStreak}\nTotal Weight Change: ${weightChange}`
    );
  } else {
    weightLossStreak = 0;
    weightGainStreak++;

    message.author.send('a7a ybro');

    message.channel.send(
      `khwl\nWeight gained: ${message.content}\nWeight Gain Streak: ${weightGainStreak}\nTotal Weight Change: ${weightChange}`
    );
  }
};

client.on('messageCreate', async (message) => {
  console.log(message.content);
  if (!message?.author.bot) {
    weightHandler(message);
    if (message.content === 'kosmk') {
      message.author.send('kosmk enta ya khwal');
    }
  }
});
