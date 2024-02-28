import { Telegraf } from "telegraf";
import { config } from "./config.js";
import { showMenu, closeMenu } from "./menu.js";
import { getWeather } from "./weather.js";
import { getCat } from "./cat.js";

const bot = new Telegraf(config.telegramToken, {});
bot.start((ctx) => ctx.reply('Добро пожаловать! Для начала напишите "Меню"'));

bot.on("message", async (ctx) => {
  const chatId = ctx.chat.id;

  if (ctx.message.text == "Меню") {
    showMenu(bot, chatId);
  } else if (ctx.message.location) {
    const weather = await getWeather(ctx);
    ctx.reply(weather);
  } else if (ctx.message.text == "Получить кота") {
    const cat = await getCat();
    ctx.reply(cat);
  } else {
    closeMenu(bot, chatId);
  }
});

bot.launch();
