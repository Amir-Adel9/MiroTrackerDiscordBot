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

let totalWeightChange = 0;
let weightGainStreak = 0;
let weightLossStreak = 0;

const weightHandler = (message) => {
  const weightChanged = message.content;

  totalWeightChange += parseFloat(weightChanged);

  if (message.content === 'reset') {
    totalWeightChange = 0;
    message.channel.send('Reset total weight change to 0');
    return;
  }

  if (weightChanged < 0) {
    weightGainStreak = 0;
    weightLossStreak++;

    message.author.send('gamed neek ybro');

    message.channel.send(
      `3ash ybro\nWeight Lost: ${weightChanged}\nWeight Loss Streak: ${weightLossStreak}\nTotal Weight Change: ${totalWeightChange}`
    );
  } else {
    weightLossStreak = 0;
    weightGainStreak++;

    message.author.send('a7a ybro');

    message.channel.send(
      `khwl\nWeight gained: ${weightChanged}\nWeight Gain Streak: ${weightGainStreak}\nTotal Weight Change: ${totalWeightChange}`
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
