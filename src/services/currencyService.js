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

module.exports = { getCurrencyRate };