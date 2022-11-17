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

let count = 0.0;

client.on('messageCreate', async (message) => {
  console.log(message.content);
  if (!message?.author.bot) {
    count += parseFloat(message.content);
    message.channel.send(count.toString());
    if (message.content === 'kosmk') {
      message.author.send('kosmk enta ya khwal');
    }
    count < 0
      ? message.author.send('gamed neek ybro')
      : message.author.send('a7a ybro');
  }
});
