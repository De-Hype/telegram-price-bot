const telegramBot = require("node-telegram-bot-api");
const fetchRate = require("./fetchCurrencyRate");

require("dotenv").config();
const TOKEN = process.env.Token;
const AppId = process.env.AppId;

const bot = new telegramBot(TOKEN, { polling: true });

bot.on("message", async (message) => {
  const text = message.text;
  const chat_id = message.from.id;
  console.log("/request-made-to-bot")

  if (text.toLowerCase() == "/start") {
    return bot.sendMessage(
      chat_id,
      `Hey ${message.from.first_name}, welcome to the "Check Naira Rate bot, please type NGN to check today's rate`
    );
  }
  if (text.toUpperCase() != "NGN") {
    return bot.sendMessage(
      chat_id,
      `Hey ${message.from.first_name}, I am just a bot and i do not understand that. Please type "NGN"`
    );
  }
  bot.sendMessage(chat_id, "Fetching exchange rate");
  const rate = await fetchRate();
  
  bot.sendMessage(
    chat_id,
    `1${
      rate.base
    } is currently trading at ${rate.rates.NGN.toLocaleString()} Naira `
  );

});

console.log("Bot is runing perfectly");
