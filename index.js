const { Telegraf } = require('telegraf')

const bot = new Telegraf('5128109531:AAEfLyGErDkU19dGAhNXil0Gy1OaolgV12Q')
bot.start((ctx) => ctx.reply('Я пока нихрена не умею, все вопросы к хозяину'))
// bot.help((ctx) => ctx.reply('Send me a sticker'))
// bot.on('sticker', (ctx) => ctx.reply('👍'))
// bot.command('/say', (ctx) => ctx.reply('auf'));
bot.hears('Привет', (ctx) => {
    ctx.reply(`Привет ${ctx.message.from.first_name}`)
    ctx.reply('👋');
});

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))