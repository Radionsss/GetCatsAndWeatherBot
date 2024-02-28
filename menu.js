export const showMenu = (bot, chatId) => {
  bot.telegram.sendMessage(chatId, "Выберите действие", {
    reply_markup: {
      keyboard: [
        [
          {
            text: "Узнать погоду",
            request_location: true,
          },
        ],
        ["Получить кота"],
        ["Закрыть"],
      ],
    },
  });
};

export const closeMenu = (bot, chatId) => {
  bot.telegram.sendMessage(chatId, "Клавиатура закрыта", {
    reply_markup:{
      remove_keyboard:true
    }
  })
}
