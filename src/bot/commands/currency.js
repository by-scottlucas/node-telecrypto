const { POPULAR_COINS } = require("../../configs/coinsConfig");
const { getCurrencyRate, getMultipleCurrencyRates } = require("../../services/currencyService");
const { setPendingCurrency, isPendingCurrency, clearPendingCurrency } = require("../../services/chatState");
const { findCurrency } = require("../../utils/coinsUtil");

module.exports = async (message, bot) => {
    const chatId = message.chat.id;
    const messageText = message.text.trim();
    const parts = messageText.split(/\s+/);

    if (isPendingCurrency(chatId)) {
        const currency = findCurrency(messageText);
        if (!currency) {
            bot.sendMessage(chatId, `❌ Moeda não suportada: ${messageText}`);
        } else {
            bot.sendMessage(chatId, await getCurrencyRate(currency), { parse_mode: "Markdown" });
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

    if (coinInput.includes(",")) {
        const coins = coinInput
            .split(",")
            .map(c => c.trim())
            .map(findCurrency)
            .filter(Boolean);

        if (coins.length === 0) {
            bot.sendMessage(chatId, `❌ Nenhuma moeda válida encontrada no input: ${coinInput}`);
            return;
        }

        bot.sendMessage(chatId, await getMultipleCurrencyRates(coins), { parse_mode: "Markdown" });
        return;
    }

    const currency = findCurrency(coinInput);

    if (!currency) {
        bot.sendMessage(chatId, `❌ Moeda não suportada: ${coinInput}`);
        return;
    }

    bot.sendMessage(chatId, await getCurrencyRate(currency), { parse_mode: "Markdown" });
};
