import 'dotenv/config';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagePath = path.join(__dirname, '../assets/wedding.jpg');
import { Telegraf } from 'telegraf';

const BOT_TOKEN = process.env.BOT_TOKEN!;
const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => {
    ctx.replyWithPhoto('https://ibb.co/fV7VSq77',
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
