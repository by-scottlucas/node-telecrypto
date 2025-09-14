const TelegramBot = require("node-telegram-bot-api");
const startCommand = require("./commands/start");
const currencyCommand = require("./commands/currency");
const { isPendingCurrency } = require("../services/chatState");
const { TELEGRAM_TOKEN } = require("../configs/config");

const bot = new TelegramBot(TELEGRAM_TOKEN, { polling: true });

bot.onText(/\/start/, (message) => startCommand(message, bot));
bot.onText(/\/cotacao( .+)?/, (message) => currencyCommand(message, bot));
bot.on("message", (message) => {
    const chatId = message.chat.id;

    if (isPendingCurrency(chatId)) {
        currencyCommand(message, bot);
    }
});

console.log("🤖 TeleCrypto rodando!");