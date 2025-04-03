import 'dotenv/config';

import { Telegraf } from 'telegraf';

const BOT_TOKEN = process.env.BOT_TOKEN!;
const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => {
    ctx.reply('Привет! Я работаю на TypeScript s 💙', {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Открыть сайт', url: 'https://example.com' }],
            ],
        },
    });
});

bot.launch().then(() => {
    console.log('🤖 Бот запущен');
});

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
