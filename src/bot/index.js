require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");
const startCommand = require("./commands/start");
const currencyCommand = require("./commands/currency");
const { isPendingCurrency } = require("../services/chatState");

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => startCommand(msg, bot));
bot.onText(/\/cotacao( .+)?/, (msg) => currencyCommand(msg, bot));
bot.on("message", (msg) => {
    const chatId = msg.chat.id;

    if (isPendingCurrency(chatId)) {
        currencyCommand(msg, bot);
    }
});


console.log("🤖 TeleCrypto rodando!");