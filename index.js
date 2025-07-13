const mineflayer = require('mineflayer');
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Bot đang chạy!'));
app.listen(3000, () => console.log('Server web mở cổng 3000'));

function createBot() {
  const bot = mineflayer.createBot({
    host: 'svVanillaSMP.aternos.me', // IP server của m
    port: 25565,                      // Cổng server (nếu có)
    username: 'AFK_Bot'
    version: false
  });

  bot.on('spawn', () => {
    console.log('Bot đã vào game!');
    bot.chat('/login password'); // Nếu server dùng plugin login
  });

  bot.on('end', () => {
    console.log('Bot bị kick, đang vào lại...');
    setTimeout(createBot, 5000);
  });
}

createBot();
  
