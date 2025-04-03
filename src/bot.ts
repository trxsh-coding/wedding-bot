import 'dotenv/config';

import { Telegraf } from 'telegraf';

const BOT_TOKEN = process.env.BOT_TOKEN!;
const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => {
    ctx.replyWithPhoto(
        { source: 'https://files.oaiusercontent.com/file-DD7e2QQDRb9MuhHmQSrJza?se=2025-04-03T21%3A33%3A01Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D299%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dimage.png&sig=lqHk//C6Mr84YHguKiAqYva7lQWqvscdN43pUe562y8%3D' },
        {
            caption: 'Нажми на кнопку ниже 💖',
            reply_markup: {
                inline_keyboard: [
                    [{ text: '❤️ Открыть приглашение', url: 'https://wedding-app-github-io.vercel.app/' }],
                ]
            }
        }
    );

});

bot.launch().then(() => {
    console.log('🤖 Бот запущен');
});

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
