const axios = require("axios");
const { POPULAR_COINS } = require("../configs/coinsConfig");
const { AWESOME_API_URL } = require("../configs/config");
const { formatCurrency } = require("../utils/formatters");

async function getCurrencyRate(coin) {
    coin = coin.toUpperCase();

    if (!POPULAR_COINS.includes(coin)) {
        return `❌ Moeda não suportada: ${coin}`;
    }

    try {
        const url = `${AWESOME_API_URL}/${coin}-BRL`;
        const response = await axios.get(url);
        const key = `${coin}BRL`;
        const data = response.data[key];

        if (!data) {
            return `❌ Não foi possível obter dados da moeda ${coin}.`;
        }

        const buy = formatCurrency(data.bid);
        const sell = formatCurrency(data.ask);

        return `💰 Cotação ${coin}-BRL:\nCompra: ${buy}\nVenda: ${sell}`;
    } catch (err) {
        console.error(err);
        return `❌ Não consegui consultar a moeda ${coin}.`;
    }
}

async function getMultipleCurrencyRates(coins) {
    const upperCoins = coins.map(coin => coin.toUpperCase());

    const invalids = upperCoins.filter(coin => !POPULAR_COINS.includes(coin));
    if (invalids.length) {
        return `❌ Moeda(s) não suportada(s): ${invalids.join(", ")}`;
    }

    try {
        const url = `${AWESOME_API_URL}/${upperCoins.join(",")}-BRL`;
        const response = await axios.get(url);
        const data = response.data;

        let result = "💱 *Cotações em tempo real:*\n\n";
        upperCoins.forEach(coin => {
            const key = `${coin}BRL`;
            if (data[key]) {
                const buy = formatCurrency(data[key].bid);
                const sell = formatCurrency(data[key].ask);
                result += `🔹 *${coin}-BRL*\nCompra: ${buy}\nVenda: ${sell}\n\n`;
            } else {
                result += `⚠️ Não encontrei dados para ${coin}.\n\n`;
            }
        });

        return result;
    } catch (err) {
        console.error(err);
        return `❌ Não consegui consultar as moedas: ${upperCoins.join(", ")}.`;
    }
}

module.exports = { getCurrencyRate, getMultipleCurrencyRates };