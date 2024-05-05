const telegramBot = require("node-telegram-bot-api");

require("dotenv").config();
const TOKEN = process.env.Token;

const bot = new telegramBot(TOKEN, { polling: true });

bot.on("message", async (message) => {
    const text = message.text;
    const chat_id = message.from.id;

  if (!url.startsWith("https://" || "www.")) {
    return bot.sendMessage(
      chat_id,
      `Hey ${message.from.first_name}, sorry we could not understand that "link", simply use a valid url`
    ); 
  }
  bot.sendMessage(chat_id, "Preparing to download the stuff ");
  
 

   
//   console.log(message); 
});
console.log("Bot is runing perfectly");
