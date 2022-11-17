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

const weightHandler = (message) => {
  let weightChange = 0;
  let weightGainStreak = 0;
  let weightLossStreak = 0;

  weightChange += parseFloat(message.content);

  if (weightChange < 0) {
    weightGainStreak = 0;
    weightLossStreak++;

    message.author.send('gamed neek ybro');

    message.channel.send(
      `3ash ybro \n Weight Lost: ${weightChange} \n Weight Loss Streak: ${weightLossStreak}`
    );
  } else {
    weightLossStreak = 0;
    weightGainStreak++;

    message.author.send('a7a ybro');

    message.channel.send(
      `khwl \n Weight gained: ${weightChange} \n Weight Gain Streak: ${weightGainStreak}`
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
    if (message.content === 'reset') {
      count = 0;
      message.channel.send('reset count to 0');
    }
  }
});
