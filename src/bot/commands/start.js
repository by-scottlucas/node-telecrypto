module.exports = (msg, bot) => {
    const chatId = msg.chat.id;
    bot.sendMessage(
        chatId,
        `Olá, ${msg.from.first_name}! 👋\nEu posso te informar cotações de moedas.\nUse /cotacao [moeda] para consultar.\n\nEx: /cotacao USD ou /cotacao Dólar`
    );
};
