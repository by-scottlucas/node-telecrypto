module.exports = (message, bot) => {
    const chatId = message.chat.id;
    bot.sendMessage(
        chatId,
        `Olá, ${message.from.first_name}! 👋\nEu posso te informar cotações de moedas.\nUse /cotacao [moeda] para consultar.\n\nEx: /cotacao USD ou /cotacao Dólar`
    );
};