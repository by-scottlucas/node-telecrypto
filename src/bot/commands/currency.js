const { POPULAR_COINS } = require("../../configs/coinsConfig");
const { getCurrencyRate } = require("../../services/currencyService");
const { setPendingCurrency, isPendingCurrency, clearPendingCurrency } = require("../../services/chatState");
const { findCurrency } = require("../../utils/coinsUtil");

module.exports = async (msg, bot) => {
    const chatId = msg.chat.id;
    const messageText = msg.text.trim();
    const parts = messageText.split(/\s+/);

    if (isPendingCurrency(chatId)) {
        const currency = findCurrency(messageText);
        if (!currency) {
            bot.sendMessage(chatId, `❌ Moeda não suportada: ${messageText}`);
        } else {
            bot.sendMessage(chatId, await getCurrencyRate(currency));
        }
        clearPendingCurrency(chatId);
        return;
    }

    if (parts.length === 1) {
        setPendingCurrency(chatId);
        bot.sendMessage(
            chatId,
            `💱 Escolha a moeda que deseja consultar:\n${POPULAR_COINS.join(", ")}\nDigite a sigla ou o nome da moeda, ex: USD ou dólar americano`
        );
        return;
    }

    const coinInput = parts.slice(1).join(" ");
    const currency = findCurrency(coinInput);

    if (!currency) {
        bot.sendMessage(chatId, `❌ Moeda não suportada: ${coinInput}`);
        return;
    }

    bot.sendMessage(chatId, await getCurrencyRate(currency));
};
