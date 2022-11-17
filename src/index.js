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

let totalWeightChange = 0;
let weightGainStreak = 0;
let weightLossStreak = 0;

const weightHandler = (message) => {
  const weightChanged = message.content;

  if (message.content === 'reset') {
    totalWeightChange = 0;
    weightGainStreak = 0;
    weightLossStreak = 0;

    message.channel.send('Reset total weight change to 0');

    return;
  }

  if (!parseFloat(weightChanged)) {
    message.channel.send('Ekteb rakam ym3rs');

    return;
  }

  totalWeightChange += parseFloat(weightChanged);

  if (weightChanged < 0) {
    weightGainStreak = 0;
    weightLossStreak++;

    message.channel.send(
      `3ash ybro\nWeight Lost: ${weightChanged}\nWeight Loss Streak: ${weightLossStreak}\nTotal Weight Change: ${totalWeightChange.toFixed(
        2
      )}`
    );
  } else {
    weightLossStreak = 0;
    weightGainStreak++;

    message.channel.send(
      `khwl\nWeight gained: ${weightChanged}\nWeight Gain Streak: ${weightGainStreak}\nTotal Weight Change: ${totalWeightChange.toFixed(
        2
      )}`
    );
  }
};

client.on('messageCreate', async (message) => {
  console.log(message);
  if (!message?.author.bot) {
    weightHandler(message);
    if (message.content === 'kosmk') {
      message.author.send('kosmk enta ya khwal');
    }
  }
});
