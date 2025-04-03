import 'dotenv/config';

import { Telegraf } from 'telegraf';

const BOT_TOKEN = process.env.BOT_TOKEN!;
const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => {
    ctx.reply('Приветик, это бот для моей любимой жены', {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Жмякнуть', url: 'https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-7b24-522f-bda2-d6214ddf515b/raw?se=2025-04-03T22%3A14%3A34Z&sp=r&sv=2024-08-04&sr=b&scid=000324f6-7f1d-5596-8251-8dfc9c9a15ef&skoid=de76bc29-7017-43d4-8d90-7a49512bae0f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-03T06%3A09%3A10Z&ske=2025-04-04T06%3A09%3A10Z&sks=b&skv=2024-08-04&sig=jF95pKw8NUxhM5kB1IZ/sDzeV1NG8wE9xFpygp55xkc%3D' }],
            ],
        },
    });
});

bot.launch().then(() => {
    console.log('🤖 Бот запущен');
});

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
